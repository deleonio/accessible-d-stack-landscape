export function Footer() {
	const year = new Date().getFullYear();
	const commitSha = import.meta.env.VITE_COMMIT_SHA;
	const commitDisplay = commitSha ? commitSha.slice(0, 7) : 'lokal';

	return (
		<footer className="footer">
			<div className="footer__inner footer__inner--top">
				<div className="footer__brand">
					<p className="footer-title">StackAtlas</p>
					<p className="footer-sub">Barrierefreie Technologie-Landkarte für öffentliche Plattformen</p>
				</div>
				<nav className="footer__links" aria-label="Footer-Navigation">
					<a href="https://github.com/deleonio/accessible-d-stack-landscape" rel="noopener noreferrer">
						GitHub
					</a>
					<a href="https://github.com/deleonio/accessible-d-stack-landscape#readme" rel="noopener noreferrer">
						Dokumentation
					</a>
					<a href="mailto:opensource@example.org">Kontakt</a>
					<a href="https://github.com/deleonio/accessible-d-stack-landscape/discussions" rel="noopener noreferrer">
						Community
					</a>
				</nav>
			</div>

			<div className="footer__inner footer__inner--bottom">
				<p className="footer__copy">
					© {year} StackAtlas · Lizenz: EUPL-1.2 · Built with{' '}
					<a href="https://www.public-ui.de/" rel="noopener noreferrer">
						KoliBri
					</a>
					, and{' '}
					<a href="https://www.kern-ux.com/" rel="noopener noreferrer">
						KERN-UX
					</a>
				</p>
				<p className="footer__meta" aria-label={`Build Commit ${commitDisplay}`}>
					Build-Commit: <code>{commitDisplay}</code>
				</p>
			</div>
		</footer>
	);
}
