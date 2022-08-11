import {useRef, useEffect} from 'react';

export const useFocus = ({listener}) => {
	const inputRef = useRef(null);

	useEffect(() => {
		if (!listener) return;
		setTimeout(() => {
			inputRef.current.focus();
		}, 200);
	}, [listener]);

	return {
		ref: inputRef,
	};
};
