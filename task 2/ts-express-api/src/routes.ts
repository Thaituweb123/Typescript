import { Router, Request, Response } from 'express';
import { CreateUserRequest, ApiResponse, User } from './types';
import { RequiredPermission } from './decorators';

const router = Router();
let users: User[] = [];
let idCounter = 1;

router.post('/users', (req: Request<{}, {}, CreateUserRequest>, res: Response<ApiResponse<User>>) => {
  const { name, email } = req.body;
  const newUser: User = { id: idCounter++, name, email };
  users.push(newUser);
  res.status(201).json({ data: newUser });
});

router.get('/users', (req: Request, res: Response<ApiResponse<User[]>>) => {
  res.json({ data: users });
});

// Sử dụng decorator cho route an ninh
router.post('/secure-users', RequiredPermission('admin'), (req: Request<{}, {}, CreateUserRequest>, res: Response<ApiResponse<User>>) => {
  const { name, email } = req.body;  // Lấy dữ liệu từ yêu cầu
  const newUser: User = { id: idCounter++, name, email };  // Tạo người dùng mới
  users.push(newUser);  // Thêm người dùng mới vào mảng users
  res.status(201).json({ data: newUser });  // Trả về phản hồi với dữ liệu người dùng vừa tạo
});

export default router;