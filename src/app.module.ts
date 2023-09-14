import { Module, Global } from '@nestjs/common';
import { ConfigModule } from 'nestjs-config';
import { resolve } from 'path';

import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './modules/database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { RedisCacheModule } from './modules/redis-cache/redis-cache.module';
@Global()
@Module({
  imports: [
    ConfigModule.load(resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    UsersModule,
    DatabaseModule,
    AuthModule,
    RedisCacheModule,
  ],
})
export class AppModule {}
