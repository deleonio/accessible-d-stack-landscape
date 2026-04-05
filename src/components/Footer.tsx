export function Footer() {
	const year = new Date().getFullYear();
	const commitSha = import.meta.env.VITE_COMMIT_SHA;
	const commitDisplay = commitSha ? commitSha.slice(0, 7) : 'lokal';

	return (
		<footer className="footer">
			<div className="footer__inner">
				<div className="footer__brand">
					<p className="footer-title">D-Stack Landscape</p>
					<p className="footer-sub">Technology landscape for public-sector platforms</p>
				</div>
				<nav className="footer__links" aria-label="Footer-Navigation">
					<a
						href="https://github.com/deleonio/accessible-d-stack-landscape"
						rel="noopener noreferrer"
					>
						Projekt-Repository
					</a>
					<a href="https://vite.dev/guide/" rel="noopener noreferrer">
						Vite Dokumentation
					</a>
					<a href="https://preactjs.com/guide/v10/getting-started" rel="noopener noreferrer">
						Preact Dokumentation
					</a>
				</nav>
			</div>
			<div className="footer__inner">
				<p className="footer__copy">
					© {year} D-Stack Landscape · Erstellt mit{' '}
					<a href="https://preactjs.com/" rel="noopener noreferrer">
						Preact
					</a>{' '}
					und <a href="https://vite.dev/" rel="noopener noreferrer">Vite</a> · Lizenz: EUPL-1.2
				</p>
				<p className="footer__meta" aria-label={`Build Commit ${commitDisplay}`}>
					Build-Commit: <code>{commitDisplay}</code>
				</p>
			</div>
		</footer>
	);
}
