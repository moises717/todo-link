import {useRouter} from 'next/router';
import {createUniqueId} from '../../utils/uuid';

export const StartPage = () => {
	const router = useRouter();
	const newTask = () => {
		const newUrl = createUniqueId();
		router.push(`/todo/${newUrl}`);
	};

	return (
		<div className="start-page">
			<button>Tarea</button>
			<button onClick={newTask}>Crear tareas</button>
		</div>
	);
};
