import { Controller, Post, Get, Body, Param, HttpStatus, Res } from '@nestjs/common';
import { CreateProductUseCase } from '../../application/use-cases/create-product.use-case';
import { GetProductByIdUseCase } from '../../application/use-cases/get-product-by-id.use-case';
import { CreateProductDto } from '../../application/dto/create-product.dto';
import { Response } from 'express';

@Controller('product')
export class ProductController {
  constructor(
    private readonly createProductUseCase: CreateProductUseCase,
    private readonly getProductByIdUseCase: GetProductByIdUseCase
  ) {}

  @Post()
  async create(
    @Body() createProductDto: CreateProductDto,
    @Res() response: Response,
  ) {
    try {
      const product = await this.createProductUseCase.execute(createProductDto);
      return response.status(HttpStatus.CREATED).json(product.toPrimitives());
    } catch (error: any) {
      return response
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: error.message });
    }
  }

  @Get(':id')
  async get(@Param('id') id: string, @Res() response: Response) {
    try {
      const productRepresentation = await this.getProductByIdUseCase.execute(id);
      return response.status(HttpStatus.OK).json(productRepresentation);
    } catch (error: any) {
      return response
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: error.message });
    }
  }
}