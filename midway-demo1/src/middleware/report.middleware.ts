/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: suanzi
 * @Date: 2022-05-01 17:51:48
 * @LastEditors: suanzi
 * @LastEditTime: 2022-05-01 20:08:00
 * @FilePath: \midway-ts\midway-demo1\src\middleware\report.middleware.ts
 */
import { IMiddleware } from '@midwayjs/core';
import { Middleware } from '@midwayjs/decorator';
import { NextFunction, Context } from '@midwayjs/koa';

@Middleware()
export class ReportMiddleware implements IMiddleware<Context, NextFunction> {
  resolve() {
    return async (ctx: Context, next: NextFunction) => {
      // 控制器前执行的逻辑
      // const startTime = Date.now();
      console.log(ctx);
      
      // console.log(ctx);
      // 执行下一个 Web 中间件，最后执行到控制器
      // 这里可以拿到下一个中间件或者控制器的返回值
      const result = await next();
      // 控制器之后执行的逻辑
      // console.log(Date.now() - startTime);
      console.log(result);
      
      // 返回给上一个中间件的结果
      return result;
    };
  }

  static getName(): string {
    return 'report';
  }
}
