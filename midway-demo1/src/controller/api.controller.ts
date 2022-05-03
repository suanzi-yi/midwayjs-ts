/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: suanzi
 * @Date: 2022-05-01 17:51:48
 * @LastEditors: suanzi
 * @LastEditTime: 2022-05-01 20:59:28
 * @FilePath: \midway-ts\midway-demo1\src\controller\api.controller.ts
 */
import { Inject, Controller, Post, Body ,Get,Query} from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';

@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  //保存
  @Post('/save_user')
  async getUser(@Body() user) {
    console.log(user);
    const {data,success,msg} = await this.userService.saveUser(user);
    return { success, message:msg, data };
  }
  //查找所有
  @Get('/get_alluser')
  async getAllUsers() {
    const result = await this.userService.findAllUsers();
    return { success: true, message: '成功',data: result };
  }
  //找第一个
  @Get('/get_oneuser')
  async getOneUser(){
    const result = await this.userService.findOneUser();
    return { success: true, message: '成功',data: result };
  }
  //按照名字查找
  @Get('/get_byname')
  async getByName(@Query('name') name){
    const result = await this.userService.findByName(name);
    return { success: true, message: '成功',data: result };
  }
}
