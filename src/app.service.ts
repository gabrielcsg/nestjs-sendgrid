import { SendGridService } from '@anchan828/nest-sendgrid';
import { Injectable } from '@nestjs/common';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const sgMail = require('@sendgrid/mail');

@Injectable()
export class AppService {
  constructor(private readonly sendGrid: SendGridService) {}

  // using @anchan828/nest-sendgrid
  async sendEmail(email: string) {
    await this.sendGrid.send({
      to: email,
      from: process.env.FROM_EMAIL,
      subject: 'Ok',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    });
  }

  // using @sendgrid/mail
  async sendEmail2(email: string) {
    const msg = {
      to: email, // Change to your recipient
      from: process.env.FROM_EMAIL, // Change to your verified sender
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };

    sgMail.setApiKey(process.env.SEND_GRID_ACCESS_KEY);

    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent');
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
