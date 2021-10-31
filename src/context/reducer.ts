
interface ActionsStrategy {
  [key: string]: Function
}

const reducer: (state: any, action: any) => any = (state: any, action: any) => {
  const { type, payload } = action;
  const actionsStrategy: ActionsStrategy = {
    LOGGER: () => {
      console.log(`payload`, payload);
      return { ...state, log: payload }
    },
    ORDER_BY: () => {
      const { data } = state;
      const { accesor, asc } = payload;
      const orderedByAttr = data.sort((a: any,b :any) => {
        if (asc) {
          if (a[accesor] > b[accesor]) {
            return 1;
          }
          if (a[accesor] < b[accesor]) {
            return -1;
          }
          return 0;
        }
        if (!asc){
          if (a[accesor] < b[accesor]) {
            return 1;
          }
          if (a[accesor] > b[accesor]) {
            return -1;
          }
          return 0;
        }
        
      })
      return { ...state, data: orderedByAttr, orderByColumn: accesor }
    },
  }
  return actionsStrategy[type]() || state;
};

export default reducer;