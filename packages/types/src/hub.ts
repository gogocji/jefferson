import { Breadcrumb } from './breadcrumb';
import { Client } from './client';
import { Event } from './event';
import { Extra, Extras } from './extra';
import { Integration, IntegrationClass } from './integration';
import { Primitive } from './misc';
import { SeverityLevel } from './severity';
import { User } from './user';

// 当前应用实例，用来挂载sdk
export interface Hub {
  // 是否是旧版
  isOlderThan(version: number): boolean;

  // 挂载用户client实例
  bindClient(client?: Client): void;

  getClient(): Client | undefined;

  /**
   * 捕获异常事件并发送到后台管理系统（数据中心）
   *
   * @param exception 异常实例对象.
   * @returns 返回事件id
   */
  captureException(exception: any): string;

  /**
   * 捕获消息事件并发送到后台管理系统（数据中心）
   *
   * @param message 发送给数据中心的message消息
   * @param level 定义事件等级
   * @returns 返回事件id
   */
  captureMessage(
    message: string,
    // eslint-disable-next-line deprecation/deprecation
    level?: SeverityLevel,
  ): string;

  /**
   * 手动捕获自定义事件并发送到后台管理系统（数据中心）
   *
   * @param event 发送的事件
   */
  captureEvent(event: Event): string;

  /**
   * 记录一个新的面包屑，这个面包屑之后会附加到后面发送的event事件上
   *
   * 面包屑会给上报的事件添加更多有用的上下文，更好的判断用户的报错和行为
   *
   * @param breadcrumb 面包屑对象
   */
  addBreadcrumb(breadcrumb: Breadcrumb): void;

  /**
   * 设置用户上下文用于后面上报的事件
   *
   * @param user 用户信息上下文
   */
  setUser(user: User | null): void;

  /**
   * 设置标记数组tags，会和事件合并发送
   *
   * @param tags 标签数组对象
   */
  setTags(tags: { [key: string]: Primitive }): void;

  /**
   * 设置标记tag，会和事件合并发送
   *
   * @param key String key of tag
   * @param value Value of tag
   */
  setTag(key: string, value: Primitive): void;

  /**
   * 设置事件额外信息
   * @param key String of extra
   * @param extra Any kind of data. This data will be normalized.
   */
  setExtra(key: string, extra: Extra): void;

  /**
   * 设置额外信息数组对象
   * @param extras Extras object to merge into current context.
   */
  setExtras(extras: Extras): void;

  /**
   * Sets context data with the given name.
   * @param name of the context
   * @param context Any kind of data. This data will be normalized.
   */
  setContext(name: string, context: { [key: string]: any } | null): void;

  /** 返回sdk插件对象. */
  getIntegration<T extends Integration>(integration: IntegrationClass<T>): T | null;

}
