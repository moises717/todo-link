const customFetch = async (url, {options}) => {
	try {
		const request = await fetch(url, {
			headers: {
				'Content-Type': 'application/json',
			},
			...options,
		});
		return await request.json();
	} catch (error) {
		console.error(error);
		return error;
	}
};
export default customFetch;
