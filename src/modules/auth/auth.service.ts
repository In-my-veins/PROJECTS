import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private users = [
    {
      id: 1,
      email: 'admin@soilsmart.com',
      password: '$2b$10$dummyhash', // placeholder (ignored for now)
      role: 'ADMIN',
    },
  ];

  constructor(private jwtService: JwtService) {}

  async register(email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
      id: Date.now(),
      email,
      password: hashedPassword,
      role: 'FARMER',
    };

    this.users.push(user);

    return {
      message: 'User registered successfully',
      user,
    };
  }

  async login(email: string, password: string) {
    const user = this.users.find((u) => u.email === email);

    if (!user) {
      return { message: 'User not found' };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return { message: 'Invalid password' };
    }

    const token = this.jwtService.sign({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    return {
      message: 'Login successful',
      access_token: token,
    };
  }
}