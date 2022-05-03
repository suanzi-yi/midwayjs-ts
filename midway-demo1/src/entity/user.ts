/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: suanzi
 * @Date: 2022-05-01 19:41:57
 * @LastEditors: suanzi
 * @LastEditTime: 2022-05-01 20:52:03
 * @FilePath: \midway-ts\midway-demo1\src\entity\user.ts
 */
import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';


@EntityModel()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique:true})
    name: string;

    @Column()
    age: number;

    @Column()
    address: string;

    @Column()
    phone: string;
}