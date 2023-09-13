import { Injectable, OnModuleInit } from '@nestjs/common';
import { Connection } from 'typeorm';

@Injectable()
export class DatabaseService implements OnModuleInit {
  constructor(private connection: Connection) {}

  async onModuleInit() {}
}
