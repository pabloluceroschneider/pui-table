import React from 'react';
import classnames from 'classnames';
import { useTableContext } from '../../context';

const TBody: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const { state: { className, draggable } } = useTableContext();
	const bodyRowClasses = classnames(className, 't-body__t-row');
	
	return (
		<tr className={bodyRowClasses} draggable={draggable}>
			{children}
		</tr>
	);
};

export default TBody;
