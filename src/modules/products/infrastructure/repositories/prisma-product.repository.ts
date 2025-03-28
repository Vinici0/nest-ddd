import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../domain/product.repository';
import { Product } from '../../domain/product.entity';
import { ProductCategory, ProductId, ProductInStock, ProductName, ProductPrice } from 'src/modules/products/application/dto/value-objects';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class PrismaProductRepository implements ProductRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(product: Product): Promise<void> {
    const { id, name, price, inStock, category, createdAt } =
      product.toPrimitives();
    await this.prisma.product.create({
      data: {
        id,
        name,
        price,
        inStock,
        category,
        createdAt,
      },
    });
  }

  async findById(productId: ProductId): Promise<Product> {
    const productFound = await this.prisma.product.findUnique({
      where: { id: productId.value },
    });

    if (!productFound) {
      throw new Error('Producto no encontrado');
    }


    return Product.reconstitute({
      id: productFound.id,
      name: ProductName.fromString(productFound.name),
      price: ProductPrice.fromNumber(productFound.price),
      inStock: ProductInStock.fromBoolean(productFound.inStock),
      category: ProductCategory.fromString(productFound.category),
      createdAt: new Date(productFound.createdAt),
    });
  }
}
