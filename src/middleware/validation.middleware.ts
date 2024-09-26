import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ValidationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    if (!body.name || typeof body.name !== 'string') {
      return res.status(400).json({ message: 'Tên sản phẩm không hợp lệ' });
    }
    next();
  }
}
