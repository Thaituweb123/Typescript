import { Injectable } from '@nestjs/common';
import { LogExecutionTime } from '../decorators/log-execution-time.decorator';

export interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable()
export class ProductService {
  private products: Product[] = [];

  @LogExecutionTime()  // Thêm decorator vào phương thức create
  create(product: Product) {
    this.products.push(product);
    return product;
  }

  @LogExecutionTime()  // Thêm decorator vào phương thức findAll
  findAll(): Product[] {
    return this.products;
  }

  @LogExecutionTime()  // Thêm decorator vào phương thức findOne
  findOne(id: number): Product {
    return this.products.find(product => product.id === id);
  }

  @LogExecutionTime()  // Thêm decorator vào phương thức update
  update(id: number, updatedProduct: Product) {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
      return updatedProduct;
    }
  }

  @LogExecutionTime()  // Thêm decorator vào phương thức delete
  delete(id: number) {
    this.products = this.products.filter(product => product.id !== id);
    return { message: 'Deleted successfully' };
  }
}
