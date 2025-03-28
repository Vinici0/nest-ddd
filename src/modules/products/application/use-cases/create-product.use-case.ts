// src/products/application/use-cases/create-product.use-case.ts
import { Injectable, Inject } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { ProductRepository } from '../../domain/product.repository';
import { Product } from '../../domain/product.entity';
import { ProductCategory, ProductInStock, ProductName, ProductPrice } from '../dto/value-objects';


@Injectable()
export class CreateProductUseCase {
  constructor(
    @Inject('ProductRepository')
    private readonly productRepository: ProductRepository,
    // TODO: Inyectar el EventBus si es necesario
  ) {}

  async execute(dto: CreateProductDto): Promise<Product> {
    const nameVO = ProductName.fromString(dto.name);
    const priceVO = ProductPrice.fromNumber(dto.price);
    const inStockVO = ProductInStock.fromBoolean(dto.inStock);
    const categoryVO = ProductCategory.fromString(dto.category);

    const product = Product.create({
      name: nameVO,
      price: priceVO,
      inStock: inStockVO,
      category: categoryVO,
    });

    await this.productRepository.create(product);
    return product;
  }
}
