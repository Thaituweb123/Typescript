// src/product/product.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Đảm bảo đường dẫn đúng
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async createProduct(data: CreateProductDto) {
    return this.prisma.product.create({ data });
  }

  async findAllProducts() {
    return this.prisma.product.findMany();
  }

  // Thêm các phương thức khác (update, delete, ...) nếu cần
}
