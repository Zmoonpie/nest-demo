import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/create-user.dto';
import { Request, Response } from 'express';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async register(body: RegisterDto, req: Request) {
    try {
      const data = await this.usersService.createUser(body, req);
      return { msg: '注册成功', data };
    } catch (error) {
      return { msg: '注册失败:' + error.message };
    }
  }
}
