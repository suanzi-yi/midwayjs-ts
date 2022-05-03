/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: suanzi
 * @Date: 2022-05-01 17:51:48
 * @LastEditors: suanzi
 * @LastEditTime: 2022-05-02 16:30:05
 * @FilePath: \midway-ts\midway-demo1\src\config\config.default.ts
 */
import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1651398708326_9266',
  koa: {
    port: 7001,
  },
  orm:{
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'midwayorm',
    synchronize: true,     // 如果第一次使用，不存在表，有同步的需求可以写 true
    logging: false,
  },
  cors: {
    credentials: true,
  },
  jwt: {
    secret: 'dev123456',
    expiresIn: '1h'
  }
} as MidwayConfig;
