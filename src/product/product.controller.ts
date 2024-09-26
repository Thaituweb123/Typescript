import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductService, Product } from '../product/product.service';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from '../guards/roles.guard';



@Controller('products')
export class ProductController {
    
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() product: Product) {
    return this.productService.create(product);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() product: Product) {
    return this.productService.update(id, product);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productService.delete(id);
  }



}
