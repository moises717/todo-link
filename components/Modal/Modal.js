import useAppContext from '../../hook/useAppContext';
import {TodoForm} from '../TodoForm/TodoForm';

export const Modal = () => {
	const {setModal, modal} = useAppContext();

	return (
		<div className={`modal-container  ${modal && 'modal-open'}`}>
			<div className="closable-space" onClick={() => setModal(false)}></div>
			<div className="modal slide-top">
				<div className="modal-header">Nueva tarea</div>
				<div className="modal-body">
					<TodoForm />
				</div>
			</div>
		</div>
	);
};
