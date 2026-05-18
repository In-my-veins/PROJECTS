import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  getDashboard() {
    return {
      users: 120,
      farmers: 95,
      systemStatus: 'healthy',
    };
  }
}