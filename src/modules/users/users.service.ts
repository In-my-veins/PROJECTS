import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      email: 'admin@soilsmart.com',
      role: 'ADMIN',
    },
    {
      id: 2,
      email: 'farmer@soilsmart.com',
      role: 'FARMER',
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(user => user.id === id);
  }

  create(email: string, role: string) {
    const newUser = {
      id: this.users.length + 1,
      email,
      role,
    };

    this.users.push(newUser);
    return newUser;
  }
}