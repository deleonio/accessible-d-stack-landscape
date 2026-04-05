export function Footer() {
	const year = new Date().getFullYear();
	const commitSha = import.meta.env.VITE_COMMIT_SHA;
	const commitDisplay = commitSha ? commitSha.slice(0, 7) : 'lokal';

	return (
		<footer className="footer">
			<div className="footer__inner">
				<div className="footer__brand">
					<p className="footer-title">D-Stack Landscape</p>
					<p className="footer-sub">Technologie-Übersicht des Deutschland Stack</p>
				</div>
				<nav className="footer__links" aria-label="Footer-Navigation">
					<a href="https://technologie.deutschland-stack.gov.de/" rel="noopener noreferrer">
						Deutschland Stack
					</a>
					<a href="https://www.digitale-verwaltung.de/" rel="noopener noreferrer">
						Digitale Verwaltung
					</a>
					<a href="https://public-ui.github.io/" rel="noopener noreferrer">
						KoliBri Design System
					</a>
				</nav>
			</div>
			<div className="footer__inner">
				<p className="footer__copy">
					© {year} Digitale Verwaltung Deutschland · Erstellt mit{' '}
					<a href="https://public-ui.github.io/" rel="noopener noreferrer">
						KoliBri
					</a>{' '}
					und dem KERN-Theme · Lizenz: EUPL-1.2
				</p>
				<p className="footer__meta" aria-label={`Build Commit ${commitDisplay}`}>
					Build-Commit: <code>{commitDisplay}</code>
				</p>
			</div>
		</footer>
	);
}
