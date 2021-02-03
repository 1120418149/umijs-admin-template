/*
 * @Author: Jack.zhang
 * @Date: 2021-01-13 14:02:45
 * @LastEditors: Jack.zhang
 * @LastEditTime: 2021-02-03 13:37:37
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  // 配置主题
  theme: {
    '@primary-color': '#1DA57A',
  },
  // 配置多环境打包
  define: {
    "process.env.apiUrl":'https://www.test1.com/'
  },
});
