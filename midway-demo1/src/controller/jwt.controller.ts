import { Body, Controller, Get, Headers, Inject, Post, Query } from "@midwayjs/decorator";
import { JwtService } from "_@midwayjs_jwt@3.3.5@@midwayjs/jwt";
// import {AdminMiddleWare} from "../middleware/admin.middleware"

@Controller('/jwt')
export class JWTcontroller {
    @Inject()
    jwt:JwtService

    //生成jwt
    @Post('/getjwt')
    async getjwt(@Body() user){
        console.log(user)
        const userjwt=await this.jwt.sign(user)
        return userjwt
    }
    //解析jwt
    @Get('/decodejwt')
    async decodejwt(@Headers('token') reqHeader){
        const user=await this.jwt.decode(reqHeader)
        return user
    }
    //这个请求只有携带token才能请求
    @Get('/admin/role')
    async getadminrole(@Query() params){
        return params
    }
}