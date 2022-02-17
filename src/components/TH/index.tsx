import React, { useState } from 'react';
import classnames from '../../utils/classnames';
import { useTableContext } from '../../context';
import { Header } from '../../types';

interface ITHeader {
  children: React.ReactNode, 
	header: Header
}

const THeader: React.FC<ITHeader> = ({ children, header }) => {
	const { state, actions } = useTableContext();
	const { className, onOrderByColumn } = state;
	const { onOrderBy } = actions;
	const [ isDesc, setIsDesc ] = useState(false);

	const headerClasses = classnames(className, 't-header');
	const headercontainerClasses = classnames(className, 't-header__container');
	const headerTitleClasses = classnames(className, 't-header__title');
	const headeronOrderByClasses = classnames(className, 't-header__order-by', {
		't-header__order-by--active': onOrderByColumn === header.accesor,
	});

	const handleOrder = (event: React.SyntheticEvent) => {
		event.preventDefault();
		setIsDesc(prev => !prev);
		onOrderBy({ accesor: header.accesor, asc: isDesc });
	};

	return (
		<th onClick={handleOrder} className={headerClasses} style={{ width: header.width }}>
			<div className={headercontainerClasses}>
				<div className={headerTitleClasses}>{children}</div>
				<div className={headeronOrderByClasses}>{isDesc ? '↓' : '↑'}</div>
			</div>
		</th>
	);
};

export default THeader;
