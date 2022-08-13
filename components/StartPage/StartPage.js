import {useRouter} from 'next/router';
import {createUniqueId} from '../../utils/uuid';

export const StartPage = () => {
	const router = useRouter();
	const newTask = (newId) => {
		const newUrl = createUniqueId(newId);
		router.push(`/todo/${newUrl}`);
	};

	return (
		<div className="start-page">
			<div className="start-page-header">
				<h1>TODO LINK</h1>
			</div>
			<div className="home-actions">
				<button onClick={() => newTask(false)}>
					{' '}
					<i className="fa fa-list"></i> Mi enlace actual
				</button>
				<button onClick={() => newTask(true)}>
					{' '}
					<i className="fa fa-plus"></i>Crear nuevo enlace de tareas
				</button>
			</div>
		</div>
	);
};
