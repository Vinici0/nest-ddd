import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      log: ['error', 'warn'],
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  async cleanDatabase() {
    if (process.env.NODE_ENV === 'test') {
      const isPrismaModel = (key: string): boolean => {
        return (
          key[0] !== '_' &&
          typeof (this[key as keyof this] as any)?.deleteMany === 'function'
        );
      };

      const models = Reflect.ownKeys(this).filter(
        (key): key is string => typeof key === 'string' && isPrismaModel(key),
      );

      return Promise.all(
        models.map((model) => this[model as keyof this].deleteMany()),
      );
    }
  }
}
