import { EventProcessor } from './eventprocessor';
import { Hub } from './hub';

/** 插件类 */
export interface IntegrationClass<T> {
  // 插件名
  id: string;

  new (...args: any[]): T;
}

/** 插件 */
export interface Integration {
  /**
   * Returns {@link IntegrationClass.id}
   */
  name: string;

  /**
   * Sets the integration up only once.
   * This takes no options on purpose, options should be passed in the constructor
   */
  setupOnce(addGlobalEventProcessor: (callback: EventProcessor) => void, getCurrentHub: () => Hub): void;
}
