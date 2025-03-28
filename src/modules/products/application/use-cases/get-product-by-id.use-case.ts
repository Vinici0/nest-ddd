import { Injectable, Inject } from '@nestjs/common';
import { ProductRepository } from '../../domain/product.repository';
import { ProductRepresentationDto } from '../dto/product-representation.dto';
import { ProductId } from '../dto/value-objects';

@Injectable()
export class GetProductByIdUseCase {
  constructor(
    @Inject('ProductRepository')
    private readonly productRepository: ProductRepository,
  ) {}

  async execute(id: string): Promise<ProductRepresentationDto> {
    const product = await this.productRepository.findById(
      ProductId.fromString(id),
    );
    const primitives = product.toPrimitives();

    return {
      id: primitives.id,
      name: primitives.name,
      price: primitives.price,
      inStock: primitives.inStock,
      category: primitives.category,
      createdAt: primitives.createdAt.toISOString(),
    };
  }
}
