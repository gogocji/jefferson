// 包裹函数
// __jefferson_wrapped__ ： 包裹的函数
// __jefferson_original__ ： 原函数
/** JSDoc */
export interface WrappedFunction extends Function {
  [key: string]: any;
  __jefferson_wrapped__?: WrappedFunction;
  __jefferson_original__?: WrappedFunction;
}
