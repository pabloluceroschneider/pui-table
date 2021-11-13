import React from 'react';
import classnames from '../../utils/classnames';
import { useTableContext } from '../../context';
import { Data } from '../../types';

const TBody: React.FC<{ children: React.ReactNode, dataRow: Data }> = ({ children, dataRow }) => {
	const { state, actions } = useTableContext();
	const { className, options } = state;
	const { onDropRow } = actions;
	const { draggable } = options;
	const bodyRowClasses = classnames(className, 't-body__t-row');
	const rowId = `row-${dataRow.rowIndex}`;

	function allowDrop(ev: any) {
		ev.preventDefault();
	}
	
	function drag(ev: any) {
		const stringified = JSON.stringify(dataRow);
		ev.dataTransfer.setData("dataRow", stringified);
	}
	
	function drop(ev: any) {
		var data = ev.dataTransfer.getData("dataRow");
		const parsed = JSON.parse(data);
		onDropRow({
			dragged: parsed,
			dropped: dataRow,
		});
		ev.preventDefault();
	}

	const draggableProps = {
		draggable,
		onDragStart: drag,
		onDrop: drop,
		onDragOver: allowDrop
	}
	
	return (
		<tr id={rowId} className={bodyRowClasses} {...draggableProps}>
			{children}
		</tr>
	);
};

export default TBody;
