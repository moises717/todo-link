import {createContext, useState} from 'react';

export const AppContext = createContext();

export const AppProvider = ({children}) => {
	const [todos, setTodos] = useState([]);
	const [todo, setTodo] = useState('');
	const [modal, setModal] = useState(false);
	const [reload, setReload] = useState(false);
	const [loading, setLoading] = useState(false);
	const [isUpdate, setIsUpdate] = useState(false);

	const context = {
		todos,
		setTodos,
		modal,
		setModal,
		reload,
		setReload,
		loading,
		setLoading,
		isUpdate,
		setIsUpdate,
		todo,
		setTodo,
	};

	return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
