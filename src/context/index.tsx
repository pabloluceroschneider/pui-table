import React, { useReducer, useContext, createContext } from 'react';
import { addRowIndex } from './utils';
import { TableParams, IDragAndDrop } from '../types';
import reducer from './reducer';

interface Context {
  state: any
  actions: any
}

const defaultFn : Function = (e: any) => console.error(e);

const defaultState = {
	state: {
    headers: [],
    data: [],
    className: 'pui-table',
		options: {
			draggable: false
		},
		onOrderByColumn: '',
  },
	actions: {
		onClickRow: defaultFn,
		onDropRow: defaultFn,
		onOrderBy: defaultFn,
	}
};

const TableContext = createContext(defaultState);

type TUseTableContext = (initialProps: TableParams) => Context;

const useTableReducer : TUseTableContext = (initialProps: TableParams) => {
	const [ state, dispatch ] = useReducer(reducer, {
		...defaultState.state,
		...initialProps,
		data: initialProps.data.map(addRowIndex)
	});

	const defaultActions = {
		onClickRow: () => dispatch({ type: null }),
		onDropRow: (param: IDragAndDrop) => dispatch({ type: 'ROW_DND', payload: param }),
		onOrderBy: (param: any) => dispatch({ type: 'ORDER_BY', payload: param }),
	};

	const actions = {
		onClickRow: initialProps.actions?.onClickRow || defaultActions.onClickRow,
		onDropRow: initialProps.actions?.onDropRow || defaultActions.onDropRow,
		onOrderBy: initialProps.actions?.onOrderBy || defaultActions.onOrderBy,
	}

	return { state, actions };
};

interface ITableContextProvider {
	children: React.ReactChild[]
	value: any
}

export const TableContextProvider: React.FC<ITableContextProvider> = ({ children, value }) => {
	const context: Context = useTableReducer(value);
	return <TableContext.Provider value={{ ...context }}>{children}</TableContext.Provider>;
};

export const useTableContext = () => {
	const context = useContext(TableContext);
	return context;
};
