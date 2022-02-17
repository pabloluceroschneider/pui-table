
export interface Header {
  Header: string
  accesor: string
  width?: number | string
  type?: HeaderType
}

export interface Data {
  [key: string]: any
}

enum HeaderType {
  STRING = 'string',
  NUMBER = 'number',
  BOOLEAN = 'boolean',
  DATE = 'date',
  DATETIME = 'datetime',
  TIME = 'time',
  CURRENCY = 'currency',
}

export interface Options {
  draggable?: Boolean
}

export interface IDragAndDrop {
  dragged: Data
  dropped: Data
}

export interface Actions {
  onClickRow?: () => Data
  onDropRow?: () => IDragAndDrop
  onOrderBy?: () => any
}

export interface State {
  headers: Header[]
  data: Data[]
  className?: string
  options?: Options
}

export interface TableParams {
  headers: Header[]
  data: Data[]
  className?: string
  options?: Options
  actions?: Actions
}

