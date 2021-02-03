/*
 * @Author: Jack.zhang
 * @Date: 2021-01-13 14:02:45
 * @LastEditors: Jack.zhang
 * @LastEditTime: 2021-02-03 13:15:50
 */
declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement;
  const url: string;
  export default url;
}
