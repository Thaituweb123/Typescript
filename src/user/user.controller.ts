import { Controller, Post, Body } from '@nestjs/common';
import { NotificationService } from '../notification/notification.service';

@Controller('users')
export class UserController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post('notify')
  notifyUser(@Body('method') method: string, @Body('message') message: string) {
    this.notificationService.notifyUser(method, message);
    return 'User notified';
  }
}
