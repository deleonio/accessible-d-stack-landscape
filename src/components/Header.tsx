export function Header() {
	return (
		<>
			<a href="#main-content" className="skip-nav">
				Direkt zum Inhalt springen
			</a>
			<header className="header">
				<div className="header__utility-bar" role="banner">
					<div className="utility-label">
						Öffentliche Digital-Services · Technologieverzeichnis
					</div>
					<span className="utility-info">
						<a href="#main-content">
							Zum Hauptinhalt
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
						Interaktive Übersicht der Technologien, Standards und Komponenten des Deutschland Stack – dem digitalen Ökosystem der öffentlichen Verwaltung.
					</p>
				</div>
			</header>
		</>
	);
}
