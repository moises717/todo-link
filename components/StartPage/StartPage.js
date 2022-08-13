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
			<div className="home-actions">
				<button onClick={() => newTask(false)}>Nueva tarea</button>
				<button onClick={() => newTask(true)}>Crear nueva tarea</button>
			</div>
		</div>
	);
};
