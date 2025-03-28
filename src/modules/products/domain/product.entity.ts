import {
  ProductCategory,
  ProductId,
  ProductInStock,
  ProductName,
  ProductPrice,
} from '../application/dto/value-objects';

export class Product {
  public readonly id: string;
  public readonly name: ProductName;
  public readonly price: ProductPrice;
  public readonly inStock: ProductInStock;
  public readonly category: ProductCategory;
  public readonly createdAt: Date;

  private constructor(props: {
    id: string;
    name: ProductName;
    price: ProductPrice;
    inStock: ProductInStock;
    category: ProductCategory;
    createdAt: Date;
  }) {
    this.id = props.id;
    this.name = props.name;
    this.price = props.price;
    this.inStock = props.inStock;
    this.category = props.category;
    this.createdAt = props.createdAt;
  }

  public static reconstitute(props: {
    id: string;
    name: ProductName;
    price: ProductPrice;
    inStock: ProductInStock;
    category: ProductCategory;
    createdAt: Date;
  }): Product {
    return new Product({
      id: props.id,
      name: props.name,
      price: props.price,
      inStock: props.inStock,
      category: props.category,
      createdAt: props.createdAt
    });
  }

  public static create(props: {
    name: ProductName;
    price: ProductPrice;
    inStock: ProductInStock;
    category: ProductCategory;
  }): Product {
    const id = crypto.randomUUID(); // Genera un ID único
    const createdAt = new Date();
    return new Product({ id, createdAt, ...props });
  }

  public toPrimitives() {
    return {
      id: this.id,
      name: this.name.value,
      price: this.price.value,
      inStock: this.inStock.value,
      category: this.category.value,
      createdAt: this.createdAt,
    };
  }
}