
export interface Header {
  Header: string
  accesor: string
}

export interface Data {
  [key: string]: any
}

export interface TableParams {
  headers: Header[]
  data: Data[]
  className?: string
}