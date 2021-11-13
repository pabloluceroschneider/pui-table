
const classnames = (...args: any) => {
  let classes: string[] = [];
  args.forEach((item:any) => {
    if (typeof item === 'string') {
      classes.push(item);
    }
    if (typeof item === 'object'){
      if (Array.isArray(item)) classnames(item);
      Object.keys(item).forEach((key: string) => {
        if (item[key]) {
          classes.push(item[key]);
        }
      })
    }
  })

  return classes.join(" ");
}

export default classnames;