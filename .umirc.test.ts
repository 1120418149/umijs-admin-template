/*
 * @Author: Jack.zhang
 * @Date: 2021-02-03 13:34:38
 * @LastEditors: Jack.zhang
 * @LastEditTime: 2021-02-03 13:35:00
 */
import { defineConfig } from 'umi';

export default defineConfig({
  // 配置多环境打包
  define: {
    "process.env.apiUrl":'https://www.test2.com/'
  },
});