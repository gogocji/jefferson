// 这是一个可以添加容易key-value的错误Error对象
export interface ExtendedError extends Error {
  [key: string]: any;
}
