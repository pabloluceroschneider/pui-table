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
	const { className, orderByColumn } = state;
	const { orderBy } = actions;
	const [ isDesc, setIsDesc ] = useState(false);

	const headerClasses = classnames(className, 't-header');
	const headercontainerClasses = classnames(className, 't-header__container');
	const headerTitleClasses = classnames(className, 't-header__title');
	const headerOrderByClasses = classnames(className, 't-header__order-by', {
		't-header__order-by--active': orderByColumn === header.accesor,
	});

	const handleOrder = (event: React.SyntheticEvent) => {
		event.preventDefault();
		setIsDesc(prev => !prev);
		orderBy({ accesor: header.accesor, asc: isDesc });
	};

	return (
		<th onClick={handleOrder} className={headerClasses} style={{ width: header.width }}>
			<div className={headercontainerClasses}>
				<div className={headerTitleClasses}>{children}</div>
				<div className={headerOrderByClasses}>{isDesc ? '↓' : '↑'}</div>
			</div>
		</th>
	);
};

export default THeader;
