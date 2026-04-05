import { KolBadge, KolDialog } from '@public-ui/preact';
import { useEffect, useRef } from 'preact/hooks';
import { Article } from '../types';
import { CATEGORIES } from '../data/articles';

interface CardDetailsDialogProps {
	article: Article | null;
	onClose: () => void;
}

type KolDialogElement = {
	openModal: () => Promise<void>;
	closeModal: () => Promise<void>;
};

export function CardDetailsDialog({ article, onClose }: CardDetailsDialogProps) {
	const dialogRef = useRef<KolDialogElement>(null);

	useEffect(() => {
		if (!dialogRef.current) return;
		if (article) {
			void dialogRef.current.openModal();
		} else {
			void dialogRef.current.closeModal();
		}
	}, [article]);

	const category = article ? CATEGORIES.find((c) => c.id === article.category) : null;
	const categoryColor = category?.color ?? '#003d82';
	const categoryName = category?.name ?? 'Allgemein';

	return (
		<KolDialog
			ref={dialogRef}
			_label={article?.name ?? ''}
			_variant="card"
			_width="min(640px, 95vw)"
			_on={{ onClose }}
		>
			{article && (
				<div className="card-details-dialog__body">
					<div className="card-details-dialog__meta">
						{article.logo && (
							<img src={article.logo} alt="" role="presentation" className="card-details-dialog__logo" loading="lazy" />
						)}
						<span className="card-details-dialog__category" style={{ borderLeftColor: categoryColor }}>
							{categoryName}
						</span>
					</div>

					{article.featured && (
						<div className="card-details-dialog__featured" role="note">
							<span aria-hidden="true">&#9733;</span> Empfohlene Technologie
						</div>
					)}

					<p className="card-details-dialog__description">{article.description}</p>

					{article.tags.length > 0 && (
						<div className="card-details-dialog__tags">
							<h3 className="card-details-dialog__tags-label">Schlagwörter</h3>
							<ul className="card-details-dialog__tags-list" role="list">
								{article.tags.map((tag) => (
									<li key={tag}>
										<KolBadge _label={tag} _color="#e8eaed" />
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			)}
		</KolDialog>
	);
}
