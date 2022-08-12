import {useTodoForm} from '../../hook/useTodoForm.js';

export const TodoForm = () => {
	const {onPressEnter, onFocus, setTodo, todo} = useTodoForm();
	return (
		<input
			type="text"
			placeholder="Enter para agregar ↵"
			value={todo}
			onChange={(e) => setTodo(e.target.value)}
			ref={onFocus}
			onKeyUp={onPressEnter}
		/>
	);
};
