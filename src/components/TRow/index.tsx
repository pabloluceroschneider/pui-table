import React from 'react';
import classnames from '../../utils/classnames';
import { useTableContext } from '../../context';
import { Data } from '../../types';

interface ITBody {
  children: React.ReactNode, 
	dataRow: Data
}

const TBody: React.FC<ITBody> = ({ children, dataRow }) => {
	const { state, actions } = useTableContext();
	const { className, options } = state;
	const { draggable } = options;
	const { onClickRow, onDropRow } = actions;

	const bodyRowClasses = classnames(className, 't-body__t-row');
	const rowId = `row-${dataRow.rowIndex}`;

	const handleClick = (event: React.SyntheticEvent) => {
		event.preventDefault();
		onClickRow(dataRow);
	}

	function onDragOver(event: React.DragEvent) {
		event.preventDefault();
	}
	
	function onDragStart(event: React.DragEvent) {
		const stringified = JSON.stringify(dataRow);
		event.dataTransfer.setData('pui-table:draggedRow', stringified);
	}
	
	function onDrop(event: React.DragEvent) {
		const dataTransfer = event.dataTransfer.getData('pui-table:draggedRow');
		const dragged = JSON.parse(dataTransfer);
		const dropped = dataRow;
		onDropRow({ dragged, dropped });
		event.preventDefault();
	}

	const draggableProps = {
		draggable,
		onDragStart,
		onDrop,
		onDragOver,
	}
	
	return (
		<tr id={rowId} onClick={handleClick} className={bodyRowClasses} {...draggableProps}>
			{children}
		</tr>
	);
};

export default TBody;
