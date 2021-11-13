import React from 'react';
import classnames from './utils/classnames';
import { TableParams } from './types';
import { TableContextProvider } from './context';
import THead from './components/THead';
import TBody from './components/TBody';

const Table: React.FC<TableParams> = (props) => {
	const { className } = props;
	const tableClasses = classnames(className, 't-table');
	return (
		<table className={tableClasses} data-testid="t-table">
			<TableContextProvider value={props}>
				<THead />
				<TBody />
			</TableContextProvider>
		</table>
	);
};

Table.defaultProps = {
	className: 'pui-table'
}

export default Table;
