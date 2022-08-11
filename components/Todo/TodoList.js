import {useRouter} from 'next/router';
import {useEffect} from 'react';

import useAppContext from '../../hook/useAppContext';
import {getTodos} from '../../services/todo.service';
import {TodoItem} from '../TodoItem/TodoItem';

export const TodoList = () => {
	const {setTodos, todos, reload} = useAppContext();
	const id = useRouter().query.id;
	useEffect(() => {
		if (id) {
			getTodos({userId: id}).then((res) => {
				setTodos(res.data);
			});
		}
	}, [reload, id]);

	return (
		<ul className="item-list">
			{todos?.map((items) => {
				return <TodoItem key={items._id} {...items} />;
			})}
		</ul>
	);
};
