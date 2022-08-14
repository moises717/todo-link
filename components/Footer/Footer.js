import useAppContext from '../../hook/useAppContext';

import {Plus} from '../../icons/SvgIcons';

export const Footer = () => {
	const {setModal, todos} = useAppContext();
	return (
		<div className="footer">
			<div className="footer-text">
				Tareas <b>{todos?.length}</b>
			</div>
			<div className="footer-btn">
				<button className="btn-primary" onClick={() => setModal((open) => !open)}>
					Nueva <Plus />
				</button>
			</div>
		</div>
	);
};
