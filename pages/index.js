import {Header} from '../components/Header/Header';
import {Content} from '../components/Content/Content';
import {AppLayout} from '../layout/AppLayout';
import {StartPage} from '../components/StartPage/StartPage';

export default function Home() {
	return (
		<AppLayout>
			<Content>
				<StartPage />
			</Content>
		</AppLayout>
	);
}
