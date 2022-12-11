import { Package } from './package';

export interface SdkInfo {
  // sdk的名称
  name?: string;
  version?: string;
  // sdk内的插件列表
  integrations?: string[];
  // 当前sdk范围（就是代码里面子包有哪些，比如react、vue）
  packages?: Package[];
}
