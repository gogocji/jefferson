// 栈帧（大部分都是用在错误堆栈里面的一条条frame）
/** JSDoc */
export interface StackFrame {
  // 代码所在文件
  filename?: string;
  // 代码所在函数
  function?: string;
  // 代码所在模块
  module?: string;
  // 行号
  lineno?: number;
  // 列号
  colno?: number;
  // 绝对地址
  abs_path?: string;
  context_line?: string;
  // 前面的代码信息
  pre_context?: string[];
  // 后面的代码信息
  post_context?: string[];
  // 是否是应用内报错
  in_app?: boolean;
  // 自定义变量
  vars?: { [key: string]: any };
}
