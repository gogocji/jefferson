import { Breadcrumb } from './breadcrumb';
import { Contexts } from './context';
import { Exception } from './exception';
import { Extras } from './extra';
import { Primitive } from './misc';
import { Request } from './request';
import { SdkInfo } from './sdkinfo';
import { SeverityLevel } from './severity';
import { User } from './user';

/** JSDoc */
export interface Event {
  // 事件id
  event_id?: string;
  message?: string;
  timestamp?: number;
  start_timestamp?: number;
  // 事件等级
  level?: SeverityLevel;
  // 当前环境
  environment?: string;
  // sdk信息
  sdk?: SdkInfo;
  // 请求
  request?: Request;
  fingerprint?: string[];
  // 报错信息
  exception?: {
    values?: Exception[];
  };
  // 面包屑
  breadcrumbs?: Breadcrumb[];
  // 上下文信息
  contexts?: Contexts;
  // 事件标签
  tags?: { [key: string]: Primitive };
  // 额外信息
  extra?: Extras;
  // 用户信息
  user?: User;
}