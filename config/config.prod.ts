/*
 * @Author: Jack.zhang
 * @Date: 2021-02-03 13:55:51
 * @LastEditors: Jack.zhang
 * @LastEditTime: 2021-02-03 13:56:01
 */
import { defineConfig } from 'umi';

export default defineConfig({
  // 配置多环境打包
  define: {
    'process.env.apiUrl': 'https://www.test3.com/'
  }
});
