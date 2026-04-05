export function Header() {
	const brandUrl = import.meta.env.VITE_BRAND_URL ?? "/";

	return (
		<>
			<a href="#main-content" className="skip-nav">
				Direkt zum Inhalt springen
			</a>
			<header className="header">
				<div className="header__instance-strip" role="note" aria-label="instance information">
					<div className="official-label">
						<span className="official-label__emblem" aria-hidden="true">
							<span />
							<span />
							<span />
						</span>
						Official project instance
					</div>
					<span className="official-info">Maintained for public-sector digital collaboration</span>
				</div>

				<div className="header__brand-bar">
					<a href={brandUrl} className="brand-logo" rel="noopener noreferrer">
						<span>Project Digital Infrastructure</span>
						<span className="brand-logo__badge">Open</span>
					</a>
				</div>

				<div className="header__content">
					<p className="header__eyebrow">Public Digital Infrastructure Landscape</p>
					<h1>Technology Landscape</h1>
					<p className="header__subtitle">
						Interactive overview of technologies, standards, and components for public digital infrastructure programs.
					</p>
				</div>
			</header>
		</>
	);
}
