import {useRouter} from 'next/router';
import toast from 'react-hot-toast';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import {ArrowLeft} from '../../icons/SvgIcons';

export const Header = () => {
	const router = useRouter();
	const url = typeof window !== 'undefined' ? window.location.href : '';

	const onCopyText = async () => {
		toast.success('Enlace copiado al portapapeles');
	};

	return (
		<header className="header">
			<div className="arrow-left" onClick={() => router.push('/')}>
				<ArrowLeft />
			</div>
			<div className="header-content">
				<span>Lista de tareas</span>
			</div>
			<CopyToClipboard text={url} onCopy={onCopyText}>
				<div className="arrow-right" title="Copiar al portapapeles">
					<i className="fa fa-clipboard"></i>
				</div>
			</CopyToClipboard>
		</header>
	);
};
