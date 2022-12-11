import { Event } from './event';

/**
 * 事件处理器，在事件发送之前用来改变事件相关内容
 * 事件处理器将一直推迟一直到你的Promise变成resolved
 * PromiseLike指的就是：就是有在该对象上有then方法，当然，Promoise本身就是PromiseLike
 */
export interface EventProcessor {
  id?: string; // This field can't be named "name" because functions already have this field natively
  (event: Event): PromiseLike<Event | null> | Event | null;
}
