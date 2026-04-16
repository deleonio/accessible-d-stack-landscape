import { Route, Router, useLocation } from 'preact-iso';
import { Footer } from './components/Footer';
import { HashLocationProvider } from './components/HashLocationProvider';
import { Header } from './components/Header';
import { PwaWrapper } from './components/PwaWrapper';
import { useThemePreference } from './hooks/useThemePreference';
import { HomePage } from './pages/HomePage';
import { ImprintPage } from './pages/ImprintPage';
import { NewsPage } from './pages/NewsPage';
import { SettingsPage } from './pages/SettingsPage';
import { StackGalleryPage } from './pages/StackGalleryPage';

function AppContent() {
	const { path } = useLocation();
	const { preference, setPreference } = useThemePreference();

	return (
		<div className="flex flex-col min-h-screen w-full">
			<Header currentUrl={path} themePreference={preference} onThemeChange={setPreference} />
			<Router>
				<Route path="/" component={HomePage} />
				<Route path="/settings" component={() => <SettingsPage themePreference={preference} onThemeChange={setPreference} />} />
				<Route path="/einstellungen" component={() => <SettingsPage themePreference={preference} onThemeChange={setPreference} />} />
				<Route path="/news" component={NewsPage} />
				<Route path="/neuigkeiten" component={NewsPage} />
				<Route path="/imprint" component={ImprintPage} />
				<Route path="/impressum" component={ImprintPage} />
				<Route path="/stacks" component={StackGalleryPage} />
				<Route path="/stacks-galerie" component={StackGalleryPage} />
				<Route default component={HomePage} />
			</Router>
			<Footer />
			<PwaWrapper />
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
