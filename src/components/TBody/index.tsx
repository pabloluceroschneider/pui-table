import React from 'react';
import classnames from '../../utils/classnames';
import { Data, Header } from '../../types';
import { useTableContext } from '../../context';
import TRow from '../TRow';
import TData from '../TData';

const TBody: React.FC = () => {
	const { state } = useTableContext();
	const { headers, data, className } = state;

	const bodyClasses = classnames(className, 't-body');

	return (
		<tbody className={bodyClasses}>
			{data.map((row: Data) => (
				<TRow key={row.rowIndex} dataRow={row}>
					{headers.map((header: Header) => {
						return (
							<TData key={header.accesor} row={row}>
								{row[`${header.accesor}`]}
							</TData>
						);
					})}
				</TRow>
			))}
		</tbody>
	);
};

export default TBody;
