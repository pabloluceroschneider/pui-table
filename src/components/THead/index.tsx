import React from 'react';
import classnames from '../../utils/classnames';
import { Header } from '../../types';
import { useTableContext } from '../../context';
import TH from '../TH';

const THead: React.FC = () => {
	const { state: { headers, className} } = useTableContext();
	const headClasses = classnames(className, 't-head');
	return (
		<thead className={headClasses}>
			<tr>
				{headers.map((header: Header) => {
					return (
						<TH key={header.accesor} header={header}>
							{header.Header}
						</TH>
					);
				})}
			</tr>
		</thead>
	);
};

export default THead;
