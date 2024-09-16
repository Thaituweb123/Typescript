import 'reflect-metadata';
import { Request, Response, NextFunction } from 'express';

export function RequiredPermission(permission: string) {
  return function (req: Request, res: Response, next: NextFunction) {
    // Giả lập kiểm tra quyền
    if (!req.headers['x-permission'] || req.headers['x-permission'] !== permission) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    next(); // Cho phép tiếp tục đến middleware hoặc route tiếp theo
  };
}