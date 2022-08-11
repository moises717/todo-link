import {useState} from 'react';
import toast from 'react-hot-toast';

import useAppContext from '../hook/useAppContext';
import {deleteTodo, updateTodo} from '../services/todo.service';

export const useTodoAction = ({completed, id}) => {
	const [checked, setChecked] = useState(completed);
	const {setReload} = useAppContext();

	const handleCheck = async () => {
		toast.promise(updateTodo({id, data: {completed: !checked}}), {
			loading: 'Actualizado tarea 🤨 ...',
			success: () => {
				setChecked(!checked);
				setReload(true);
				return `Tarea ${!checked ? 'completa 🥳' : 'actualizada 🤔'}`;
			},
		});
	};

	const onDelete = async (id) => {
		toast.promise(deleteTodo(id), {
			loading: 'Eliminando...',
			success: () => {
				setReload((prev) => !prev);
				return 'Tarea eliminada 🙂';
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
