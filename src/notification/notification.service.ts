import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
  sendEmail(message: string) {
    console.log('Email sent:', message);
  }

  sendSMS(message: string) {
    console.log('SMS sent:', message);
  }

  notifyUser(method: string, message: string) {
    if (method === 'email') {
      this.sendEmail(message);
    } else if (method === 'sms') {
      this.sendSMS(message);
    }
  }
}
