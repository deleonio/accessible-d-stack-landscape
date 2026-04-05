import { useEffect, useRef } from 'preact/hooks';
import { Article } from '../types';
import { CATEGORIES } from '../data/articles';

interface CardDetailsDialogProps {
	article: Article | null;
	onClose: () => void;
}

export function CardDetailsDialog({ article, onClose }: CardDetailsDialogProps) {
	const dialogRef = useRef<HTMLDialogElement>(null);
	const closeButtonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const dialog = dialogRef.current;
		if (!dialog) return;

		if (article) {
			dialog.showModal();
			closeButtonRef.current?.focus();
		} else {
			dialog.close();
		}
	}, [article]);

	useEffect(() => {
		const dialog = dialogRef.current;
		if (!dialog) return;

		const handleClose = () => onClose();
		dialog.addEventListener('close', handleClose);
		return () => dialog.removeEventListener('close', handleClose);
	}, [onClose]);

	const handleBackdropClick = (e: MouseEvent) => {
		if (e.target === dialogRef.current) {
			onClose();
		}
	};

	if (!article) {
		return <dialog ref={dialogRef} className="card-details-dialog" aria-modal="true" onClick={handleBackdropClick} />;
	}

	const category = CATEGORIES.find((c) => c.id === article.category);
	const categoryColor = category?.color ?? '#003d82';
	const categoryName = category?.name ?? 'Allgemein';

	return (
		<dialog
			ref={dialogRef}
			className="card-details-dialog"
			aria-modal="true"
			aria-labelledby="dialog-title"
			onClick={handleBackdropClick}
		>
			<div className="card-details-dialog__content">
				<header className="card-details-dialog__header">
					<div className="card-details-dialog__title-row">
						{article.logo && (
							<img src={article.logo} alt="" role="presentation" className="card-details-dialog__logo" loading="lazy" />
						)}
						<div className="card-details-dialog__title-group">
							<h2 id="dialog-title" className="card-details-dialog__title">
								{article.name}
							</h2>
							<span
								className="card-details-dialog__category"
								style={{ borderLeftColor: categoryColor }}
							>
								{categoryName}
							</span>
						</div>
					</div>
					<button
						ref={closeButtonRef}
						className="card-details-dialog__close"
						onClick={onClose}
						aria-label="Dialog schließen"
						type="button"
					>
						&times;
					</button>
				</header>

				<div className="card-details-dialog__body">
					{article.featured && (
						<div className="card-details-dialog__featured" role="note">
							<span>&#9733;</span> Empfohlene Technologie
						</div>
					)}

					<p className="card-details-dialog__description">{article.description}</p>

					{article.tags.length > 0 && (
						<div className="card-details-dialog__tags">
							<h3 className="card-details-dialog__tags-label">Schlagwörter</h3>
							<ul className="card-details-dialog__tags-list" role="list">
								{article.tags.map((tag) => (
									<li key={tag} className="card-details-dialog__tag">
										{tag}
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</div>
		</dialog>
	);
}
