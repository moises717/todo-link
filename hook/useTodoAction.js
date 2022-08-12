import {useState} from 'react';

import useAppContext from '../hook/useAppContext';
import {deleteTodo, updateTodo} from '../services/todo.service';
import {toastMessage} from '../utils/toast';

export const useTodoAction = ({completed, id}) => {
	const [checked, setChecked] = useState(completed);
	const {setReload} = useAppContext();

	const handleCheck = async () => {
		toastMessage(updateTodo({id, data: {completed: !checked}}), {
			loading: 'Actualizado tarea 🤨 ...',
			success: () => {
				setChecked(!checked);
				setReload(true);
				return `Tarea ${!checked ? 'completa 🥳' : 'actualizada 🤔'}`;
			},
		});
	};

	const onDelete = async (id) => {
		toastMessage(deleteTodo(id), {
			loading: 'Eliminando tarea 🤨 ...',
			success: ({statusCode}) => {
				if (statusCode !== 200) return 'Error al eliminar tarea 😢';
				setReload((prev) => !prev);
				return 'Tarea eliminada 🤨';
			},
		});
	};

	return {
		handleCheck,
		onDelete,
		checked,
		setChecked,
		setReload,
	};
};
