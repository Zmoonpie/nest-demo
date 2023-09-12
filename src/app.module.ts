import { Module, Global } from '@nestjs/common';
import { ConfigModule } from 'nestjs-config';
import { resolve } from 'path';

import { UsersModule } from './module/users/users.module';
import { DatabaseModule } from './module/database/database.module';
@Global()
@Module({
  imports: [
    ConfigModule.load(resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    UsersModule,
    DatabaseModule,
  ],
})
export class AppModule {}
