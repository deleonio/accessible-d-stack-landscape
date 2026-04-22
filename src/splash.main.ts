const SPLASH_FALLBACK_EXIT_MS = 10000;
const SPLASH_EXIT_TRANSITION_MS = 600;

function dismissSplashFromBootstrap(): void {
	const splash = document.getElementById('splash');
	if (!splash || splash.dataset.dismissed === 'true') {
		return;
	}

	splash.dataset.dismissed = 'true';
	splash.classList.add('splash--exiting');
	splash.style.pointerEvents = 'none';

	setTimeout(() => {
		splash.remove();
	}, SPLASH_EXIT_TRANSITION_MS);
}

document.addEventListener('click', (event) => {
	const splash = document.getElementById('splash');
	if (splash?.contains(event.target as Node)) {
		dismissSplashFromBootstrap();
	}
});

document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') {
		dismissSplashFromBootstrap();
	}
});

setTimeout(dismissSplashFromBootstrap, SPLASH_FALLBACK_EXIT_MS);
