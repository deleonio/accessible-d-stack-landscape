import { Route, Router, useLocation } from 'preact-iso';
import { useEffect, useState } from 'preact/hooks';
import { BetaNoticeModal } from './components/BetaNoticeModal';
import { Footer } from './components/Footer';
import { HashLocationProvider } from './components/HashLocationProvider';
import { Header } from './components/Header';
import { PwaWrapper } from './components/PwaWrapper';
import { RouteAnnouncementRegion } from './hooks/useRouteAnnouncement';
import { DependencyGraphPage } from './pages/DependencyGraphPage';
import { HomePage } from './pages/HomePage';
import { ImprintPage } from './pages/ImprintPage';
import { NewsPage } from './pages/NewsPage';
import { SettingsPage } from './pages/SettingsPage';
import { StackGalleryPage } from './pages/StackGalleryPage';

function AppContent() {
	const { path } = useLocation();
	const [betaModalOpen, setBetaModalOpen] = useState(false);

	useEffect(() => {
		const openBetaModal = () => setBetaModalOpen(true);

		if (!document.getElementById('splash')) {
			openBetaModal();
			return;
		}

		window.addEventListener('stackatlas:splash-dismissed', openBetaModal, { once: true });
		return () => {
			window.removeEventListener('stackatlas:splash-dismissed', openBetaModal);
		};
	}, []);

	return (
		<div className="flex flex-col min-h-screen w-full">
			<RouteAnnouncementRegion />
			<Header currentUrl={path} />
			<Router>
				<Route path="/" component={StackGalleryPage} />
				<Route path="/settings" component={SettingsPage} />
				<Route path="/deps" component={HomePage} />
				<Route path="/graphs" component={DependencyGraphPage} />
				<Route path="/news" component={NewsPage} />
				<Route path="/imprint" component={ImprintPage} />
				<Route path="/stacks" component={StackGalleryPage} />
				<Route default component={StackGalleryPage} />
			</Router>
			<Footer />
			<PwaWrapper />
			<BetaNoticeModal isOpen={betaModalOpen} onClose={() => setBetaModalOpen(false)} />
		</div>
	);
}

function App() {
	return (
		<HashLocationProvider>
			<AppContent />
		</HashLocationProvider>
	);
}

export default App;
