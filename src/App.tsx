import { Router } from 'preact-router';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { PwaWrapper } from './components/PwaWrapper';
import { HomePage } from './pages/HomePage';
import { ImprintPage } from './pages/ImprintPage';
import { SettingsPage } from './pages/SettingsPage';

type RouteProps = {
	default?: boolean;
	path?: string;
};

function HomeRoute({ default: isDefault, path }: RouteProps) {
	void isDefault;
	void path;

	return <HomePage />;
}

function SettingsRoute({ default: isDefault, path }: RouteProps) {
	void isDefault;
	void path;

	return <SettingsPage />;
}

function ImprintRoute({ default: isDefault, path }: RouteProps) {
	void isDefault;
	void path;

	return <ImprintPage />;
}

function App() {
	return (
		<div className="app">
			<Header />
			<Router>
				<HomeRoute path="/" default />
				<SettingsRoute path="/settings" />
				<SettingsRoute path="/einstellungen" />
				<ImprintRoute path="/imprint" />
				<ImprintRoute path="/impressum" />
			</Router>
			<Footer />
			<PwaWrapper />
		</div>
	);
}

export default App;
