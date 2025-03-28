import { ProductId } from '../application/dto/value-objects';
import { Product } from './product.entity';

export abstract class ProductRepository {
  abstract create(product: Product): Promise<void>;
  abstract findById(productId: ProductId): Promise<Product>;
}
