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
    ORDER_BY: () => {
      const { data } = state;
      const { accesor, asc } = payload;
      let orderedByAttr = sortByAttr({ data, attr: accesor, asc });
      orderedByAttr = orderedByAttr.map(addRowIndex);
      return { ...state, data: orderedByAttr, onOrderByColumn: accesor };
    },
    ROW_DND: () => {
      const { data } = state;
      const { dragged, dropped } = payload;
      let newData: any[] = [];
      for (let index = 0; index < data.length; index++) {
        
        if (index === dropped.rowIndex) {
          newData.push(dragged)
        }
        
        if (index === dragged.rowIndex) continue;

        newData.push(data[index])
      }

      newData = newData.map((t: any, index) => ({...t, rowIndex: index }))
      
      return { ...state, data: newData, onOrderByColumn: '' };
    },
  }
  return actionsStrategy[type]() || state;
};

export default reducer;