import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // using @anchan828/nest-sendgrid
  @Post('send-email')
  async sendEmail(@Body() email: string) {
    await this.appService.sendEmail(email);
  }

  // using @sendgrid/mail
  @Post('send-email-2')
  async sendEmail2(@Body() email: string) {
    await this.appService.sendEmail2(email);
  }
}
