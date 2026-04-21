import { KolButton } from '@public-ui/preact';
import { useEffect, useRef } from 'preact/hooks';
import { useTranslation } from 'react-i18next';

interface BetaNoticeModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export function BetaNoticeModal({ isOpen, onClose }: BetaNoticeModalProps) {
	const { t } = useTranslation();
	const closeButtonRef = useRef<HTMLButtonElement>(null);
	const titleId = 'beta-notice-title';
	const descId = 'beta-notice-desc';

	useEffect(() => {
		if (!isOpen) return;

		const focusTimeout = setTimeout(() => {
			closeButtonRef.current?.focus();
		}, 50);

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};
		document.addEventListener('keydown', handleKeyDown);

		return () => {
			clearTimeout(focusTimeout);
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div className="beta-modal-overlay" onClick={(e: MouseEvent) => { if (e.target === e.currentTarget) onClose(); }}>
			<div
				role="dialog"
				aria-modal="true"
				aria-labelledby={titleId}
				aria-describedby={descId}
				className="beta-modal"
			>
				<h2 id={titleId} className="beta-modal__title">
					{t('betaNotice.title')}
				</h2>
				<p id={descId} className="beta-modal__description">
					{t('betaNotice.description')}
				</p>
				<div className="beta-modal__actions">
					<KolButton
						ref={closeButtonRef}
						_label={t('betaNotice.closeButton')}
						_variant="primary"
						_on={{ onClick: onClose }}
					/>
				</div>
			</div>
		</div>
	);
}
