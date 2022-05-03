/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: suanzi
 * @Date: 2022-05-01 17:51:48
 * @LastEditors: suanzi
 * @LastEditTime: 2022-05-02 16:22:48
 * @FilePath: \midway-ts\midway-demo1\src\configuration.ts
 */
import { Configuration, App } from '@midwayjs/decorator';
import * as koa from '@midwayjs/koa';
import * as validate from '@midwayjs/validate';
import * as info from '@midwayjs/info';
import * as orm from '@midwayjs/orm';
import * as crossDomain from '@midwayjs/cross-domain';
import * as jwt from '@midwayjs/jwt';
import { join } from 'path';
import { DefaultErrorFilter } from './filter/default.filter';
import { NotFoundFilter } from './filter/notfound.filter';
import { ReportMiddleware } from './middleware/report.middleware';
import { AdminMiddleWare } from './middleware/admin.middleware';

@Configuration({
  imports: [
    koa,
    validate,
    orm,
    crossDomain,
    jwt,
    {
      component: info,
      enabledEnvironment: ['local'],
    },
  ],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle {
  @App()
  app: koa.Application;

  async onReady() {
    // add middleware
    this.app.useMiddleware([ReportMiddleware,AdminMiddleWare]);
    // add filter
    this.app.useFilter([NotFoundFilter, DefaultErrorFilter]);
  }
}
