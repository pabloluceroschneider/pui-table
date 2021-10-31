import React from 'react';
import classnames from 'classnames';
import { useTableContext } from '../../context';

const TData: React.FC<{ children: React.ReactNode, row: any }> = ({ children, row }) => {
	const { state: { className }, actions: { log } } = useTableContext();
	const bodyDataClasses = classnames(className, 't-body__t-data');

	const handleClick = () => {
		log({ cell: children, row });
	};

	return (
		<td onClick={handleClick} className={bodyDataClasses}>
			{children}
		</td>
	);
};

export default TData;
