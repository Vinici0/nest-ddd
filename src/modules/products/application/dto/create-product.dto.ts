import { IsString, IsNumber, IsBoolean, Length, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @Length(3, 30)
  name: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsBoolean()
  inStock: boolean;

  @IsString()
  @Length(3, 30)
  category: string;
}
