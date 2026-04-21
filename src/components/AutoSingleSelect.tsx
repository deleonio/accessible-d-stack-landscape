import { KolSingleSelect } from '@public-ui/preact';
import type { ComponentProps } from 'preact';

type KolSingleSelectProps = ComponentProps<typeof KolSingleSelect>;
type Option = { label: string | number; value: unknown; disabled?: boolean };

function flattenOptions(options: unknown): Option[] {
	if (!Array.isArray(options)) return [];
	const result: Option[] = [];
	for (const o of options) {
		if (o && typeof o === 'object' && 'options' in o && Array.isArray(o.options)) {
			result.push(...flattenOptions(o.options));
		} else {
			result.push(o as Option);
		}
	}
	return result;
}

export function AutoSingleSelect(props: KolSingleSelectProps) {
	const { _on, _value, _options, ...rest } = props;

	const handleBlur = (event: Event) => {
		_on?.onBlur?.(event);
		const flat = flattenOptions(_options);
		if (flat.some((o) => o.value === _value)) return;
		const first = flat.find((o) => !o.disabled);
		if (!first || !_on?.onChange) return;
		_on.onChange(new Event('change'), first.value);
	};

	return (
		<KolSingleSelect
			{...rest}
			_value={_value}
			_options={_options}
			_on={{
				..._on,
				onBlur: handleBlur,
			}}
		/>
	);
}
