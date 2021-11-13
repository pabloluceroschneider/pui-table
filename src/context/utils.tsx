
export const addRowIndex = (row : any, index: number) => ({...row, rowIndex : index });

export const sortByAttr = ({data, attr, asc} : any) => {
  return data.sort((a: any,b :any) => {
    if (asc) {
      if (a[attr] > b[attr]) {
        return 1;
      }
      if (a[attr] < b[attr]) {
        return -1;
      }
      return 0;
    }
    if (!asc){
      if (a[attr] < b[attr]) {
        return 1;
      }
      if (a[attr] > b[attr]) {
        return -1;
      }
      return 0;
    }
  })
}

