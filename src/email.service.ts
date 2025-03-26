import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private readonly transporter;

  constructor(private readonly configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      service: 'SendGrid',
      auth: {
        user: 'apikey', // Always 'apikey' for SendGrid
        pass: this.configService.get<string>('EMAIL_API_KEY'), // API Key as password
      },
    });
  }

  async sendMail(to: string, subject: string, text: string) {
    const mailOptions = {
      from: this.configService.get<string>('EMAIL_FROM'), // Sender's email
      to,
      subject,
      text,
    };
    return this.transporter.sendMail(mailOptions);
  }
}
