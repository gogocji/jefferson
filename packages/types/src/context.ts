// context上下文信息（包括了应用信息、设备信息、操作系统信息、地域信息）

// 每一个context都是一个key是string的对象信息
export type Context = Record<string, unknown>;

export interface Contexts extends Record<string, Context | undefined> {
  // 应用上下文
  app?: AppContext;
  // 设备上下文
  device?: DeviceContext;
  // 操作系统上下文
  os?: OsContext;
  // 地域文化信息上下文
  culture?: CultureContext;
}

export interface AppContext extends Record<string, unknown> {
  // 应用名（因为同一个公司会有多个子应用）
  app_name?: string;
  // 应用版本号
  app_version?: string;
}

// 设备上下文信息
export interface DeviceContext extends Record<string, unknown> {
  // 设备名
  name?: string;
  // 生产商
  manufacturer?: string;
  // 品牌
  brand?: string;
  screen_resolution?: string;
  // 屏幕高度像素
  screen_height_pixels?: number;
  // 屏幕宽度像素
  screen_width_pixels?: number;
  // 屏幕密度
  screen_density?: number;
  // 设备类型
  device_type?: string;
  // 电池状态
  battery_status?: string;
  // 设备唯一标识
  device_unique_identifier?: string;
  // 是否支持震动
  supports_vibration?: boolean;
  // 是否支持加速度传感器
  supports_accelerometer?: boolean;
  // 是否支持陀螺仪（是一种用来传感与维持方向的装置）
  supports_gyroscope?: boolean;
  // 是否支持音频
  supports_audio?: boolean;
  // 是否支持位置服务
  supports_location_service?: boolean;
}

// 操作系统上下文信息
export interface OsContext extends Record<string, unknown> {
  // 操作系统名
  name?: string;
  // 操作系统版本
  version?: string;
  // 操作系统内核版本
  kernel_version?: string;
}

// 地域、文化信息上下文
export interface CultureContext extends Record<string, unknown> {
  // 日历
  calendar?: string;
  // 地点（用于国际化，比如zh就是中国）
  locale?: string;
  // 是否支持24小时制格式
  is_24_hour_format?: boolean;
  // 时区
  timezone?: string;
}
