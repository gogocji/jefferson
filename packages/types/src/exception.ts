import { Stacktrace } from './stacktrace';

/** JSDoc */
export interface Exception {
  type?: string;
  value?: string;
  module?: string;
  stacktrace?: Stacktrace;
}
