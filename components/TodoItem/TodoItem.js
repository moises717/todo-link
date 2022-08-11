import {useTodoAction} from '../../hook/useTodoAction';

export const TodoItem = ({title, _id, completed}) => {
	const {checked, handleCheck, onDelete} = useTodoAction({completed, id: _id});
	return (
		<li>
			<input type="checkbox" id={_id} defaultChecked={checked} onChange={handleCheck} />
			<label className={checked ? 'completed' : ''}>{title}</label>
			<span onClick={() => onDelete(_id)}>
				<i className="fa fa-trash"></i>
			</span>
		</li>
	);
};
