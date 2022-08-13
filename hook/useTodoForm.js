import toast from 'react-hot-toast';

import {useFocus} from './useFocus';
import useAppContext from './useAppContext';
import {createTodo, updateTodo} from '../services/todo.service';
import {toastMessage} from '../utils/toast';

export const useTodoForm = () => {
	const {setReload, setModal, modal, setTodo, todo, isUpdate} = useAppContext();
	const {ref: onFocus} = useFocus({listener: modal});

	const onPressEnter = async (e) => {
		if (e.key === 'Escape' || e.keyCode === 27) setModal(false);
		if (e.key !== 'Enter') return;

		if (!e.target.value || todo.title === '') return toast.error('Ingrese una tarea');

		if (isUpdate) {
			return toastMessage(updateTodo({id: todo.id, data: {title: todo.title}}), {
				loading: 'Actualizando tarea 🤨 ...',
				success: ({statusCode}) => {
					if (statusCode !== 200) return 'Error al actualizar tarea 😢';
					setReload((prev) => !prev);
					setTodo({title: '', id: ''});
					setModal(false);
					return 'Tarea actualizada 🤨';
				},
			});
		}

		toastMessage(createTodo({data: {title: todo.title}}), {
			loading: 'Agregando tarea 🙂 ... ',
			success: () => {
				setReload((prev) => !prev);
				setTodo({
					title: '',
				});
				return 'Tarea agregada 🤩';
			},
		});
	};

	return {
		onPressEnter,
		onFocus,
		setTodo,
		todo,
	};
};
