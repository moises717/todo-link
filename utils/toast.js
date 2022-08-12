import toast from 'react-hot-toast';

export const toastMessage = (promise, options) => {
	toast.remove();
	return toast.promise(promise, options);
};
