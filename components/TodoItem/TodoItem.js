import {useState} from 'react';
import useAppContext from '../../hook/useAppContext';
import {updateTodo} from '../../services/todo.service';

export const TodoItem = ({title, _id, completed}) => {
	const [checked, setChecked] = useState(completed);
	const {setReload, setLoading, loading} = useAppContext();

	const handleCheck = async () => {
		setLoading(true);
		await updateTodo({id: _id, data: {completed: !checked}});
		setReload((prev) => !prev);
		setChecked((prev) => !prev);
		setLoading(false);
	};

	return (
		<li>
			<input type="checkbox" id={_id} defaultChecked={checked} onChange={handleCheck} />
			<label htmlFor={_id} className={checked ? 'completed' : ''}>
				{title}
			</label>
			<i className="fa fa-trash"></i>
		</li>
	);
};
