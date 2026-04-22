import { KolButton, KolCard, KolInputText } from '@public-ui/preact';
import { useMemo, useState } from 'preact/hooks';
import { useTranslation } from 'react-i18next';
import { ITEMS } from '../data/catalog';
import { Item } from '../types';
import { getLocalizedText } from '../utils';
import { AutoSingleSelect as KolSingleSelect } from './AutoSingleSelect';

interface LocalStackComposerProps {
	onCreate: (name: string, itemIds: string[]) => boolean;
}

export function LocalStackComposer({ onCreate }: LocalStackComposerProps) {
	const { i18n, t } = useTranslation();
	const [name, setName] = useState('');
	const [selectedItemId, setSelectedItemId] = useState('');
	const [itemIds, setItemIds] = useState<string[]>([]);
	const [message, setMessage] = useState('');

	const itemOptions = useMemo(
		() =>
			ITEMS.map((item) => ({
				label: getLocalizedText(item.name, i18n.language),
				value: item.id,
			})),
		[i18n.language],
	);

	const selectedItems = useMemo(() => {
		const indexById = new Map(ITEMS.map((item) => [item.id, item]));
		return itemIds.map((itemId) => indexById.get(itemId)).filter((item): item is Item => Boolean(item));
	}, [itemIds]);

	const addItem = () => {
		if (!selectedItemId || itemIds.includes(selectedItemId)) {
			return;
		}
		setItemIds((previous) => [...previous, selectedItemId]);
	};

	const removeItem = (itemId: string) => {
		setItemIds((previous) => previous.filter((id) => id !== itemId));
	};

	const save = () => {
		const didSave = onCreate(name, itemIds);
		if (!didSave) {
			setMessage(t('stackGallery.custom.error', 'Bitte Namen und mindestens ein Item angeben.'));
			return;
		}

		setItemIds([]);
		setName('');
		setSelectedItemId('');
		setMessage(t('stackGallery.custom.saved', 'Lokaler Stack gespeichert.'));
	};

	return (
		<KolCard _label={t('stackGallery.custom.title', 'Eigenen Stack erstellen')}>
			<div className="local-stack-composer flex flex-col gap-4 p-4">
				<KolInputText
					_label={t('stackGallery.custom.name', 'Stack-Name')}
					_value={name}
					_on={{
						onInput: (_event: Event, value: unknown) => setName(typeof value === 'string' ? value : ''),
					}}
				/>
				<div className="flex gap-2 items-end">
					<KolSingleSelect
						_label={t('stackGallery.custom.item', 'Item hinzufügen')}
						_options={itemOptions}
						_value={selectedItemId}
						_on={{
							onChange: (_event: Event, value: unknown) => setSelectedItemId(typeof value === 'string' ? value : ''),
						}}
					/>
					<KolButton
						_label={t('stackGallery.custom.add', 'Hinzufügen')}
						_variant="secondary"
						_disabled={!selectedItemId || itemIds.includes(selectedItemId)}
						_on={{ onClick: addItem }}
					/>
				</div>

				{selectedItems.length > 0 && (
					<ul className="flex flex-col gap-2" aria-label={t('stackGallery.custom.selectedAria', 'Ausgewählte Items')}>
						{selectedItems.map((item) => (
							<li key={item.id} className="flex items-center justify-between gap-3">
								<span>{getLocalizedText(item.name, i18n.language)}</span>
								<KolButton _label={t('stackGallery.custom.remove', 'Entfernen')} _on={{ onClick: () => removeItem(item.id) }} />
							</li>
						))}
					</ul>
				)}

				<KolButton _label={t('stackGallery.custom.save', 'Stack speichern')} _on={{ onClick: save }} />
				{message && <p>{message}</p>}
			</div>
		</KolCard>
	);
}
