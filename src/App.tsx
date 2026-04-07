import { Router } from 'preact-router';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { PwaWrapper } from './components/PwaWrapper';
import { HomePage } from './pages/HomePage';
import { ImprintPage } from './pages/ImprintPage';
import { SettingsPage } from './pages/SettingsPage';

type RouteProps = {
	path?: string;
};

function HomeRoute({ path }: RouteProps) {
	void path;

	return <HomePage />;
}

function SettingsRoute({ path }: RouteProps) {
	void path;

	return <SettingsPage />;
}

function ImprintRoute({ path }: RouteProps) {
	void path;

	return <ImprintPage />;
}

function App() {
	return (
		<div className="app">
			<Header />
			<Router>
				<HomeRoute path="/" />
				<SettingsRoute path="/einstellungen" />
				<ImprintRoute path="/impressum" />
			</Router>
			<Footer />
			<PwaWrapper />
		</div>
	);
}

export default App;
