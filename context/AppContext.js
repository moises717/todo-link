import {createContext, useState} from 'react';

export const AppContext = createContext();

export const AppProvider = ({children}) => {
	const [todos, setTodos] = useState([]);
	const [modal, setModal] = useState(false);
	const [reload, setReload] = useState(false);
	const [loading, setLoading] = useState(false);

	const context = {
		todos,
		setTodos,
		modal,
		setModal,
		reload,
		setReload,
		loading,
		setLoading,
	};

	return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
