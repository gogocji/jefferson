import { StackFrame } from './stackframe';

/** JSDoc */
export interface Stacktrace {
  frames?: StackFrame[];
}

// skipFirst跳过堆栈内iframe前几条信息
export type StackParser = (stack: string, skipFirst?: number) => StackFrame[];
// 单独对某一个行的解析
export type StackLineParserFn = (line: string) => StackFrame | undefined;
export type StackLineParser = [number, StackLineParserFn];
