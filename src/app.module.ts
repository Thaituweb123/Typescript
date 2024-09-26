import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { NotificationService } from './notification/notification.service';
import { UserController } from './user/user.controller';
import { OrderController } from './order/order.controller';
import { LoggingModule } from './logging/logging.module';

@Module({
  imports: [ProductModule, LoggingModule],
  providers: [NotificationService],
  controllers: [UserController, OrderController],
})
export class AppModule {}
