import toast from 'react-hot-toast';
import {useFocus} from './useFocus';
import useAppContext from './useAppContext';
import {createTodo} from '../services/todo.service';

export const useTodoForm = () => {
	const {setReload, setModal, modal} = useAppContext();
	const {ref: onFocus} = useFocus({listener: modal});

	const onPressEnter = async (e) => {
		if (e.key === 'Escape' || e.keyCode === 27) setModal(false);
		if (e.key !== 'Enter') return;

		const {value} = e.target;
		if (!value) return toast.error('Ingrese una tarea');

		const {statusCode} = await createTodo({data: {title: value}});

		if (statusCode !== 200) return toast.error('Error al crear la tarea');
		toast.success('Tarea creada');
		setReload((prev) => !prev);
		setModal(false);
		e.target.value = '';
	};

	return {
		onPressEnter,
		onFocus,
	};
};
