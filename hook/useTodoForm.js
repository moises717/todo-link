import {useFocus} from './useFocus';
import useAppContext from './useAppContext';
import {createTodo} from '../services/todo.service';
import {toastMessage} from '../utils/toast';

export const useTodoForm = () => {
	const {setReload, setModal, modal} = useAppContext();
	const {ref: onFocus} = useFocus({listener: modal});

	const onPressEnter = async (e) => {
		if (e.key === 'Escape' || e.keyCode === 27) setModal(false);
		if (e.key !== 'Enter') return;

		const {value} = e.target;
		if (!value) return toast.error('Ingrese una tarea');

		toastMessage(createTodo({data: {title: value}}), {
			loading: 'Agregando tarea 🙂 ... ',
			success: () => {
				setReload((prev) => !prev);
				e.target.value = '';
				return 'Tarea agregada 🤩';
			},
		});
	};

	return {
		onPressEnter,
		onFocus,
	};
};
