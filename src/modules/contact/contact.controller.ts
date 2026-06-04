import { Controller, Post, Body } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private service: ContactService) {}

  @Post()
  send(
    @Body('name') name: string,
    @Body('message') message: string,
  ) {
    return this.service.sendMessage(name, message);
  }
}