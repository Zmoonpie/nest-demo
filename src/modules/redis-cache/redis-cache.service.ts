import {
  Injectable,
  Inject,
  OnModuleInit,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { RedisClientType } from 'redis';

@Injectable()
export class RedisCacheService implements OnModuleInit {
  constructor(@Inject('REDIS_CLIENT') private redisClient: RedisClientType) {}

  async onModuleInit() {}

  test() {
    this.redisClient.set('aaa', 222);
  }

  async get(body) {
    const { key } = body;
    return await this.redisClient.get(key);
  }

  async set(body, time?: number) {
    try {
      const { key, val } = body;
      await this.redisClient.set(key, val);
      time && (await this.redisClient.expire(key, time));
      return;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
