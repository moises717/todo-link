import toast from 'react-hot-toast';

import {useFocus} from './useFocus';
import useAppContext from './useAppContext';
import {createTodo} from '../services/todo.service';
import {toastMessage} from '../utils/toast';

export const useTodoForm = () => {
	const {setReload, setModal, modal, setTodo, todo} = useAppContext();
	const {ref: onFocus} = useFocus({listener: modal});

	const onPressEnter = async (e) => {
		if (e.key === 'Escape' || e.keyCode === 27) setModal(false);
		if (e.key !== 'Enter') return;

		if (!e.target.value | !todo) return toast.error('Ingrese una tarea');

		toastMessage(createTodo({data: {title: todo}}), {
			loading: 'Agregando tarea 🙂 ... ',
			success: () => {
				setReload((prev) => !prev);
				setTodo('');
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
