import { Injectable } from '@nestjs/common';

@Injectable()
export class SystemService {
  status() {
    return {
      status: 'running',
      uptime: '99.9%',
    };
  }
}