import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { RegisterDto } from '../auth/dto/create-user.dto';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection, UpdateResult, Not, Like, In } from 'typeorm';
import { Request, Response } from 'express';
import * as bcrypt from 'bcryptjs';
import { cloneDeep } from 'lodash';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userEntity: Repository<UserEntity>,
  ) {}
  async createUser(
    user: UserEntity | RegisterDto,
    req: Request,
  ): Promise<UserEntity> {
    const { username, password, email } = user;

    /* 用户是否已经在系统中 */
    const where = [{ username }, { email }];
    const u: UserEntity = await this.userEntity.findOne({ where: where });
    if (u) {
      throw new HttpException(
        '用户名或者邮箱已被注册！',
        HttpStatus.BAD_REQUEST,
      );
    }

    const userInput: any = cloneDeep(user);
    const hashedPassword = bcrypt.hashSync(password, 10);
    userInput.password = hashedPassword;

    let n: UserEntity;

    n = await this.userEntity.save(userInput);
    return n;
  }

  async findAll(): Promise<any[]> {
    const list = await this.userEntity.find();
    return list?.map((user) => ({
      username: user.username,
      email: user.email,
    }));
  }
}
