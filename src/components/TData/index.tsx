import React from 'react';
import classnames from '../../utils/classnames';
import { useTableContext } from '../../context';

interface ITData {
  children: React.ReactNode, 
	row: any
}

const TData: React.FC<ITData> = ({ children, row }) => {
	const { state, actions } = useTableContext();
	const { className } = state;
	
	const bodyDataClasses = classnames(className, 't-body__t-data');

	const handleClick = (event: React.SyntheticEvent) => {
		event.preventDefault();
	};

	return (
		<td onClick={handleClick} className={bodyDataClasses}>
			{children}
		</td>
	);
};

export default TData;
