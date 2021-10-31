import React from 'react';
import classnames from 'classnames';
import { Data, Header } from '../../types';
import { useTableContext } from '../../context';
import { useDragAndDrop } from './useDragAndDrop';
import TRow from '../TRow';
import TData from '../TData';

const TBody: React.FC = () => {
	const { state: { headers, data, className } } = useTableContext();
	const bodyClasses = classnames(className, 't-body');
	useDragAndDrop();

	return (
		<tbody className={bodyClasses}>
			{data.map((row: Data, index) => (
				<TRow key={index}>
					{headers.map((header: Header) => {
						return <TData key={header.accesor} row={row} >{row[`${header.accesor}`]}</TData>;
					})}
				</TRow>
			))}
		</tbody>
	);
};

export default TBody;
