import {useTodoAction} from '../../hook/useTodoAction';

export const TodoItem = (data) => {
	const {title, _id, completed} = data;
	const {checked, handleCheck, onUpdate, onDelete} = useTodoAction({completed, id: _id});
	return (
		<li>
			<input type="checkbox" id={_id} defaultChecked={checked} onChange={handleCheck} />
			<label className={checked ? 'completed' : ''}>{title}</label>
			<span className="delete" onClick={() => onDelete(_id)}>
				<i className="fa fa-trash"></i>
			</span>
			<span className="update" onClick={() => onUpdate(data)}>
				<i className="fa fa-marker"></i>
			</span>
		</li>
	);
};
