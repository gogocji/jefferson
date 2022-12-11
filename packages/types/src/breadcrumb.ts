import { SeverityLevel } from "./severity";

// 面包屑（用来记录用户的行为路径等）
/** JSDoc */
export interface Breadcrumb {
  type?: string;
  level?: SeverityLevel;
  event_id?: string;
  category?: string;
  message?: string;
  data?: { [key: string]: any };
  timestamp?: number;
}

/** JSDoc */
export interface BreadcrumbHint {
  [key: string]: any;
}