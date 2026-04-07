import { KolButton } from '@public-ui/preact';
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
		<div className="stack-selector" role="group" aria-label={t('stack.selectorAria')}>
			<span className="stack-selector__label">{t('stack.label')}</span>
			<KolButton _label={t('stack.all')} _variant={activeStackId === null ? 'primary' : 'secondary'} _on={{ onClick: () => onStackChange(null) }} />
			{stacks.map((stack) => (
				<KolButton
					key={stack.id}
					_label={`${getLocalizedText(stack.name, i18n.language)} (${stack.items.length})`}
					_variant={activeStackId === stack.id ? 'primary' : 'secondary'}
					_on={{ onClick: () => onStackChange(stack.id) }}
				/>
			))}
		</div>
	);
}
