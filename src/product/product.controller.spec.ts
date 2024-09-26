// src/product/product.controller.spec.ts

import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

describe('ProductController', () => {
  let controller: ProductController;
  let service: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [
        {
          provide: ProductService,
          useValue: {
            createProduct: jest.fn(),
            findAllProducts: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ProductController>(ProductController);
    service = module.get<ProductService>(ProductService);
  });

  it('should create a product', async () => {
    const dto: CreateProductDto = { name: 'Product 1', price: 10.99 };
    jest.spyOn(service, 'createProduct').mockResolvedValue(dto);

    const result = await controller.create(dto);
    expect(result).toEqual(dto);
    expect(service.createProduct).toHaveBeenCalledWith(dto);
  });

  it('should return an array of products', async () => {
    const productArray = [{ name: 'Product 1', price: 10.99 }];
    jest.spyOn(service, 'findAllProducts').mockResolvedValue(productArray);

    const result = await controller.findAll();
    expect(result).toEqual(productArray);
    expect(service.findAllProducts).toHaveBeenCalled();
  });
});
