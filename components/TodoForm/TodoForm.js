import {useTodoForm} from '../../hook/useTodoForm.js';

export const TodoForm = () => {
	const {onPressEnter, onFocus} = useTodoForm();

	return <input type="text" placeholder="Enter para agregar ↵" ref={onFocus} onKeyUp={onPressEnter} />;
};
