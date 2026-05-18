import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // REGISTER
  @Post('register')
  register(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return this.authService.register(email, password);
  }

  // LOGIN
  @Post('login')
  login(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return this.authService.login(email, password);
  }

  // ADMIN ONLY ROUTE
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Get('admin')
  getAdminData() {
    return {
      message: 'Welcome Admin 👑',
    };
  }

  // FARMER ONLY ROUTE
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('FARMER')
  @Get('farmer')
  getFarmerData() {
    return {
      message: 'Welcome Farmer 🌱',
    };
  }

  // TEST AUTH ROUTE
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile() {
    return {
      message: 'You are inside a protected route',
    };
  }
}