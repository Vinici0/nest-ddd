import { Module } from '@nestjs/common';
import { ProductController } from './infrastructure/controllers/product.controller';
import { CreateProductUseCase } from './application/use-cases/create-product.use-case';
import { GetProductByIdUseCase } from './application/use-cases/get-product-by-id.use-case';
import { PrismaProductRepository } from './infrastructure/repositories/prisma-product.repository';

@Module({
  controllers: [ProductController],
  providers: [
    CreateProductUseCase,
    GetProductByIdUseCase,
    {
      provide: 'ProductRepository',
      useClass: PrismaProductRepository,
    },
  ],
  exports: [CreateProductUseCase, GetProductByIdUseCase],
})
export class ProductsModule {}
