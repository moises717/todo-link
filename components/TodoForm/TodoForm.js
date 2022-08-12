import {useTodoForm} from '../../hook/useTodoForm.js';

export const TodoForm = () => {
	const {onPressEnter, onFocus, setTodo, todo} = useTodoForm();
	return (
		<input
			type="text"
			placeholder="Enter para agregar ↵"
			value={todo.title}
			onChange={(e) => setTodo((prev) => ({...prev, title: e.target.value}))}
			ref={onFocus}
			onKeyUp={onPressEnter}
		/>
	);
};
