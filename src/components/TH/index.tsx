import React, { useState } from 'react';
import classnames from 'classnames';
import { useTableContext } from '../../context';
import { Header } from '../../types';

const THeader: React.FC<{ children: React.ReactChild; header: Header }> = ({ children, header }) => {
	const { state: { className, orderByColumn }, actions: { orderBy } } = useTableContext();
	const [ isDesc, setIsDesc ] = useState(false);

	const headerClasses = classnames(className, 't-header');
	const headercontainerClasses = classnames(className, 't-header__container');
	const headerTitleClasses = classnames(className, 't-header__title');
	const headerOrderByClasses = classnames(className, 't-header__order-by', {
		't-header__order-by--active': orderByColumn === header.accesor,
	});

	const handleOrder = () => {
		setIsDesc((prev) => !prev);
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
