import { Controller, Post, Body } from '@nestjs/common';
import { RegisterDto } from './dto/create-user.dto';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() body: RegisterDto, req: Request) {
    return this.authService.register(body, req);
  }
}
