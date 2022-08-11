import {Header} from '../../components/Header/Header';
import {Footer} from '../../components/Footer/Footer';
import {Content} from '../../components/Content/Content';
import {Tasks} from '../../components/Tasks/Tasks';
import {AppLayout} from '../../layout/AppLayout';

export default function Todo() {
	return (
		<AppLayout>
			<Header />
			<Content>
				<Tasks />
			</Content>
			<Footer />
		</AppLayout>
	);
}
