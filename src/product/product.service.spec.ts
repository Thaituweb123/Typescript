// src/product/product.service.spec.ts

import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { PrismaService } from '../prisma/prisma.service'; // Đảm bảo đường dẫn đúng

describe('ProductService', () => {
  let service: ProductService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductService,
        {
          provide: PrismaService,
          useValue: {
            product: {
              create: jest.fn(), // Mock các phương thức
              findMany: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<ProductService>(ProductService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined(); // Kiểm tra xem service có được khởi tạo không
  });

  it('should create a product', async () => {
    const productData = { name: 'Product 1', price: 10.99 };
    jest.spyOn(prismaService.product, 'create').mockResolvedValue(productData as any);

    const result = await service.createProduct(productData);
    expect(result).toEqual(productData);
    expect(prismaService.product.create).toHaveBeenCalledWith({ data: productData });
  });

  it('should find all products', async () => {
    const productArray = [{ name: 'Product 1', price: 10.99 }];
    jest.spyOn(prismaService.product, 'findMany').mockResolvedValue(productArray as any);

    const result = await service.findAllProducts();
    expect(result).toEqual(productArray);
    expect(prismaService.product.findMany).toHaveBeenCalled();
  });
});
