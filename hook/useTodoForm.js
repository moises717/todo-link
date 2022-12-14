import toast from 'react-hot-toast';
import {useRouter} from 'next/router';

import {useFocus} from './useFocus';
import useAppContext from './useAppContext';
import {createTodo, updateTodo} from '../services/todo.service';
import {toastMessage} from '../utils/toast';

export const useTodoForm = () => {
	const {setReload, setModal, modal, setTodo, todo, isUpdate} = useAppContext();
	const {ref: onFocus} = useFocus({listener: modal});
	const todoId = useRouter().query.id;

	const onPressEnter = async (e) => {
		if (e.key === 'Escape' || e.keyCode === 27) setModal(false);
		if (e.key !== 'Enter') return;

		if (!e.target.value || todo.title === '') return toast.error('Ingrese una tarea');

		if (isUpdate) {
			return toastMessage(updateTodo({id: todo.id, data: {title: todo.title}}), {
				loading: 'Actualizando tarea ๐คจ ...',
				success: ({statusCode}) => {
					if (statusCode !== 200) return 'Error al actualizar tarea ๐ข';
					setReload((prev) => !prev);
					setTodo({title: '', id: ''});
					setModal(false);
					return 'Tarea actualizada ๐คจ';
				},
			});
		}

		toastMessage(createTodo({data: {title: todo.title, userId: todoId}}), {
			loading: 'Agregando tarea ๐ ... ',
			success: () => {
				setReload((prev) => !prev);
				setTodo({
					title: '',
				});
				return 'Tarea agregada ๐คฉ';
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
