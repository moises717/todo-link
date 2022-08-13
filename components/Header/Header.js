import {useRouter} from 'next/router';
import toast from 'react-hot-toast';
import {ArrowLeft} from '../../icons/SvgIcons';

export const Header = () => {
	const router = useRouter();
	const shareInfo = async () => {
		navigator.clipboard.writeText(window.location.href);
		toast.success('Link copied to clipboard', {
			position: 'buttom-right',
		});
	};

	return (
		<header className="header">
			<div className="arrow-left" onClick={() => router.push('/')}>
				<ArrowLeft />
			</div>
			<div className="header-content">
				<span>Lista de tareas</span>
			</div>
			<div className="arrow-right" onClick={shareInfo}>
				<i className="fa fa-share"></i>
			</div>
		</header>
	);
};
