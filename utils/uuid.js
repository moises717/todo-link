const generateUUID = () => {
	return 'xxxxx-4xxx-xxxx'.replace(/[xy]/g, function (c) {
		let r = (Math.random() * 16) | 0,
			v = c == 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
};

export const getUniqueId = () => localStorage.getItem('uniqueId');

export const createUniqueId = (newId) => {
	if (newId) removeUniqueId();
	if (getUniqueId()) return getUniqueId();
	localStorage.setItem('uniqueId', generateUUID());

	return getUniqueId();
};

const removeUniqueId = () => localStorage.removeItem('uniqueId');
