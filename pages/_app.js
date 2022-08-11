import {Toaster} from 'react-hot-toast';
import {AppProvider} from '../context/AppContext';

import '../styles/globals.css';

function MyApp({Component, pageProps}) {
	return (
		<AppProvider>
			<Component {...pageProps} />
			<Toaster />
		</AppProvider>
	);
}

export default MyApp;
