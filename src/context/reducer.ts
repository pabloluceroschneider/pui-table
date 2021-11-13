import {
  addRowIndex,
  sortByAttr
} from './utils';

interface ActionsStrategy {
  [key: string]: Function
}

const reducer: (state: any, action: any) => any = (state: any, action: any) => {
  const { type, payload } = action;
  const actionsStrategy: ActionsStrategy = {
    LOGGER: () => {
      return { ...state, log: payload };
    },
    ORDER_BY: () => {
      const { data } = state;
      const { accesor, asc } = payload;
      let orderedByAttr = sortByAttr({ data, attr: accesor, asc });
      orderedByAttr = orderedByAttr.map(addRowIndex);
      return { ...state, data: orderedByAttr, orderByColumn: accesor };
    },
    ROW_DND: () => {
      const { data } = state;
      const { dragged, dropped } = payload;
      const draggedItem = { ...dragged, rowIndex: dropped.rowIndex };
      const droppedItem = { ...dropped, rowIndex: dragged.rowIndex };
      let newData = data;
      newData.splice(dragged.rowIndex, 1, droppedItem);
      newData.splice(dropped.rowIndex, 1, draggedItem);
      newData = newData.map(addRowIndex);
      return { ...state, data: newData, orderByColumn: '' };
    },
  }
  return actionsStrategy[type]() || state;
};

export default reducer;