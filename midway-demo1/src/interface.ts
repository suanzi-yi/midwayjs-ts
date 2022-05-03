/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: suanzi
 * @Date: 2022-05-01 17:51:48
 * @LastEditors: suanzi
 * @LastEditTime: 2022-05-01 19:55:16
 * @FilePath: \midway-ts\midway-demo1\src\interface.ts
 */
/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  uid: number;
}
export interface IBookstore{
  name?: string;
  number?: number;
  author?: string;
  price?: number;
}
export interface IUser{
  name: string;
  age: number;
  address:string;
  phone: string;
}