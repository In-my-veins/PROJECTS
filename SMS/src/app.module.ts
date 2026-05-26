import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { MaterialsModule } from './modules/materials/materials.module';
import { CalculatorModule } from './modules/calculator/calculator.module';
import { AdminModule } from './modules/admin/admin.module';
import { AnalyticsModule } from './modules/analytics/analytics.module';
import { ContactModule } from './modules/contact/contact.module';
import { SystemModule } from './modules/system/system.module';

@Module({
  imports: [AuthModule, UsersModule, MaterialsModule, CalculatorModule, AdminModule, AnalyticsModule, ContactModule, SystemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
