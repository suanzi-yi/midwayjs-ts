/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: suanzi
 * @Date: 2022-05-01 17:51:48
 * @LastEditors: suanzi
 * @LastEditTime: 2022-05-01 20:59:19
 * @FilePath: \midway-ts\midway-demo1\src\service\user.service.ts
 */
import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '_@midwayjs_orm@3.3.5@@midwayjs/orm';
import { Repository } from '_typeorm@0.3.6@typeorm';
import { User } from '../entity/user';

@Provide()
export class UserService {

  @InjectEntityModel(User)
  userModel: Repository<User>

  async saveUser(user: User) {
    console.log(user);
    try {
      const saveResult = await this.userModel.save(user);
      return {
        msg:"成功",
        data: saveResult,
        success: true
      }

    }
    catch (error) {
      return {
        msg:"失败",
        data: "已存在用户！",
        success: false
      }
    }
  }
  async findAllUsers() {
    let allUsers = await this.userModel.find({})
    return allUsers
  }
  async findOneUser() {
    let oneUsers = await this.userModel.findOne({ where: { id: 1 } })
    return oneUsers
  }
  async findByName(name: string) {
    let allUsers = await this.userModel.find({ where: { name } })
    return allUsers
  }
}