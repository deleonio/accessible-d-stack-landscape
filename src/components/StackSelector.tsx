import { KolSingleSelect } from '@public-ui/preact';
import { useTranslation } from 'react-i18next';
import { Stack } from '../types';
import { getLocalizedText } from '../utils';

interface StackSelectorProps {
	stacks: Stack[];
	activeStackId: string | null;
	onStackChange: (id: string | null) => void;
}

export function StackSelector({ stacks, activeStackId, onStackChange }: StackSelectorProps) {
	const { i18n, t } = useTranslation();

	if (stacks.length === 0) return null;

	return (
		<div className="stack-selector">
			<KolSingleSelect
				_label={t('stack.label')}
				className="sort-select"
				_options={[
					{ label: t('stack.all'), value: '' },
					...stacks.map((stack) => ({
						label: `${getLocalizedText(stack.name, i18n.language)} (${stack.items.length})`,
						value: stack.id,
					})),
				]}
				_value={activeStackId ?? ''}
				_on={{
					onChange: (_e: globalThis.Event, value: unknown) => onStackChange(value ? (value as string) : null),
				}}
			/>
		</div>
	);
}
