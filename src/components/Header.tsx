export function Header() {
	return (
		<>
			<a href="#main-content" className="skip-nav">
				Direkt zum Inhalt springen
			</a>
			<header className="header">
				<div className="header__official-strip" role="banner">
					<div className="official-label">
						<span className="official-label__emblem" aria-hidden="true">
							<span />
							<span />
							<span />
						</span>
						Eine offizielle Website der Bundesrepublik Deutschland
					</div>
					<span className="official-info">
						<a href="https://www.bund.de/DE/Service/Hinweis-Bundeswebseiten/hinweis-bundeswebseiten.html" rel="noopener noreferrer">
							Wie Sie offizielle Websites erkennen
						</a>
					</span>
				</div>

				<div className="header__brand-bar">
					<a href="https://technologie.deutschland-stack.gov.de/" className="brand-logo" rel="noopener noreferrer">
						<span>technologie.deutschland-stack.gov.de</span>
						<span className="brand-logo__badge">Gov</span>
					</a>
				</div>

				<div className="header__content">
					<p className="header__eyebrow">Digitale Verwaltung · Deutschland Stack</p>
					<h1>Technologie-Landscape</h1>
					<p className="header__subtitle">
						Interaktive Übersicht der Technologien, Standards und Komponenten des Deutschland Stack – dem digitalen
						Ökosystem der öffentlichen Verwaltung.
					</p>
				</div>
			</header>
		</>
	);
}
