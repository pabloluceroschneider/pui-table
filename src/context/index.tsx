import React, { useReducer, useContext, createContext } from 'react';
import reducer from './reducer';

interface Context {
  state: any
  actions: any
}

const defaultFn = (e: any) => console.error(e);

const defaultState = {
	state: {
    headers: [],
    data: [],
    className: 'pui-table',
		draggable: false,
		orderByColumn: '',
  },
  actions: {
    log: defaultFn,
    orderBy: defaultFn,
  },
};

const TableContext = createContext(defaultState);

const useTableReducer = (initialProps: any) => {
	const [ state, dispatch ] = useReducer(reducer, {
		...defaultState.state,
		...initialProps,
	});

	const actions = {
		log: (param: string) => dispatch({ type: 'LOGGER', payload: param }),
		orderBy: (param: any) => dispatch({ type: 'ORDER_BY', payload: param }),
	};

	return { state, actions };
};

export const TableContextProvider: React.FC<{ children: React.ReactChild[]; value: any }> = ({ children, value }) => {
	const context: Context = useTableReducer(value);
	return <TableContext.Provider value={{ ...context }}>{children}</TableContext.Provider>;
};

export const useTableContext = () => {
	const context = useContext(TableContext);
	return context;
};
