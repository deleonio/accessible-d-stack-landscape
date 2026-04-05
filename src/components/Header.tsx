export function Header() {
	const brandUrl = import.meta.env.VITE_BRAND_URL ?? '/';

	return (
		<>
			<a href="#main-content" className="skip-nav">
				Direkt zum Inhalt springen
			</a>
			<header className="header">
				<div className="header__instance-strip" role="note" aria-label="Instanz-Informationen">
					<div className="official-label">
						<span className="official-label__emblem" aria-hidden="true">
							<span />
							<span />
							<span />
						</span>
						Offizielles Projekt-Setup
					</div>
					<span className="official-info">Ausgerichtet an den Doku-Vorgaben (MVP Layout)</span>
				</div>

				<div className="header__brand-bar">
					<a href={brandUrl} className="brand-logo" rel="noopener noreferrer">
						<span>D-Stack Landscape</span>
						<span className="brand-logo__badge">MVP</span>
					</a>
					<nav className="header__nav" aria-label="Hauptnavigation">
						<a href="/">Home</a>
						<a href="#main-content">Kategorien</a>
						<a href="https://github.com/deleonio/accessible-d-stack-landscape#readme" rel="noopener noreferrer">
							Docs
						</a>
					</nav>
				</div>

				<div className="header__content">
					<p className="header__eyebrow">Public Digital Infrastructure</p>
					<h1>Tech-Ökosystem Landkarte</h1>
					<p className="header__subtitle">
						Interaktive Übersicht von Technologien, Standards und Komponenten für die digitale Verwaltung.
					</p>
				</div>
			</header>
		</>
	);
}
