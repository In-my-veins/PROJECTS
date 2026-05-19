import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactService {
  sendMessage(name: string, message: string) {
    return {
      status: 'sent',
      name,
      message,
    };
  }
}