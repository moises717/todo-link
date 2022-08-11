import {useRouter} from 'next/router';
import {getUniqueId} from '../../utils/uuid';

export const StartPage = () => {
	const router = useRouter();
	return (
		<div className="start-page">
			<button>Tarea</button>
			<button onClick={() => router.push(`todo/${getUniqueId()}`)}>Crear tareas</button>
		</div>
	);
};
