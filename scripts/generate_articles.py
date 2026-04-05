#!/usr/bin/env python3
from __future__ import annotations

import csv
import json
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
INPUT_CSV = ROOT / 'data' / 'items.csv'
OUTPUT_TS = ROOT / 'src' / 'data' / 'articles.generated.ts'

CATEGORY_MAP = {
    'betrieb': 'betrieb',
    'infrastruktur': 'infrastruktur',
    'plattform': 'plattform',
    'zugang': 'zugang',
}


def normalize_category(raw: str) -> str:
    compact = ''.join(raw.split()).lower()
    for key, value in CATEGORY_MAP.items():
        if key in compact:
            return value
    return 'plattform'


def parse_tags(raw: str) -> list[str]:
    if not raw:
        return []
    return [tag.strip() for tag in raw.split(',') if tag.strip()]


def normalize_logo(raw: str) -> str:
    cleaned = (raw or '').strip()
    if not cleaned:
        return ''
    if cleaned.startswith('http://') or cleaned.startswith('https://'):
        return cleaned
    return '/' + cleaned.lstrip('/')


def main() -> None:
    rows: list[dict[str, object]] = []
    with INPUT_CSV.open(newline='', encoding='utf-8') as fh:
        reader = csv.DictReader(fh)
        for index, row in enumerate(reader, start=1):
            rows.append(
                {
                    'id': str(index),
                    'name': (row.get('name') or '').strip(),
                    'category': normalize_category(row.get('category') or ''),
                    'description': (row.get('description') or '').strip(),
                    'logo': normalize_logo(row.get('logo') or ''),
                    'tags': parse_tags(row.get('tag') or ''),
                    'featured': False,
                }
            )

    generated_at = datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace('+00:00', 'Z')

    lines: list[str] = [
        '// GENERATED FILE - DO NOT EDIT MANUALLY',
        f'// Generated from: {INPUT_CSV.relative_to(ROOT).as_posix()}',
        f'// Generated at: {generated_at}',
        '',
        "import { Article } from '../types';",
        '',
        "const ASSET_BASE_URL = (import.meta.env.VITE_ASSET_BASE_URL ?? '').replace(/\\/+$/, '');",
        '',
        'function withAssetBaseUrl(logo?: string): string | undefined {',
        '	if (!logo || /^https?:\\/\\//.test(logo)) return logo;',
        "	const normalizedPath = `/${logo.replace(/^\\/+/, '')}`;",
        '	return ASSET_BASE_URL ? `${ASSET_BASE_URL}${normalizedPath}` : normalizedPath;',
        '}',
        '',
        'const RAW_ARTICLES: Article[] = [',
    ]

    for row in rows:
        lines.extend(
            [
                '\t{',
                f"\t\tid: {json.dumps(row['id'], ensure_ascii=False)},",
                f"\t\tname: {json.dumps(row['name'], ensure_ascii=False)},",
                f"\t\tcategory: {json.dumps(row['category'], ensure_ascii=False)},",
                f"\t\tdescription: {json.dumps(row['description'], ensure_ascii=False)},",
                f"\t\tlogo: {json.dumps(row['logo'], ensure_ascii=False)},",
                f"\t\ttags: {json.dumps(row['tags'], ensure_ascii=False)},",
                '\t\tfeatured: false,',
                '\t},',
            ]
        )

    lines.extend(
        [
            '];',
            '',
            'export const ARTICLES: Article[] = RAW_ARTICLES.map((article) => ({',
            '\t...article,',
            '\tlogo: withAssetBaseUrl(article.logo),',
            '}));',
            '',
        ]
    )

    OUTPUT_TS.write_text('\n'.join(lines), encoding='utf-8')
    print(f'Generated {OUTPUT_TS.relative_to(ROOT)} from {INPUT_CSV.relative_to(ROOT)}')


if __name__ == '__main__':
    main()
