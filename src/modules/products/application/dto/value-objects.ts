export class ProductName {
  private constructor(public readonly value: string) {}

  public static fromString(value: string): ProductName {
    if (value.length < 3 || value.length > 30) {
      throw new Error(
        'El nombre del producto debe tener entre 3 y 30 caracteres',
      );
    }
    return new ProductName(value);
  }
}

export class ProductPrice {
  private constructor(public readonly value: number) {}

  public static fromNumber(value: number): ProductPrice {
    if (value < 0) {
      throw new Error('El precio no puede ser negativo');
    }
    return new ProductPrice(value);
  }
}

export class ProductInStock {
  private constructor(public readonly value: boolean) {}
  public static fromBoolean(value: boolean): ProductInStock {
    return new ProductInStock(value);
  }
}

export class ProductCategory {
  private constructor(public readonly value: string) {}
  public static fromString(value: string): ProductCategory {
    if (value.length < 3 || value.length > 30) {
      throw new Error(
        'La categoría del producto debe tener entre 3 y 30 caracteres',
      );
    }
    return new ProductCategory(value);
  }
}

export class ProductId {
  private constructor(public readonly value: string) {}
  public static fromString(value: string): ProductId {
    return new ProductId(value);
  }
}
