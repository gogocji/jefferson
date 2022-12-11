// 请求数据
export interface Request {
  url?: string;
  method?: string;
  data?: any;
  query_string?: QueryParams;
  cookies?: { [key: string]: string };
  // 当前环境（boe、pre、prd）
  env?: { [key: string]: string };
  headers?: { [key: string]: string };
}

// 参数（多种类型）
export type QueryParams = string | { [key: string]: string } | Array<[string, string]>;
