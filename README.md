# 📧 NestJS Email Module

*A plug-and-play email module for NestJS supporting SendGrid, AWS SES, and Nodemailer.*  

---

## 📦 Installation

```sh
npm install nestjs-email-module
```

---

## 🚀 Usage

### 1️⃣ Import the Module
In your `app.module.ts`:

```typescript
import { Module } from '@nestjs/common';
import { EmailModule } from 'nestjs-email-module';

@Module({
  imports: [
    EmailModule.register({
      provider: 'sendgrid', // or 'ses', 'nodemailer'
      apiKey: process.env.SENDGRID_API_KEY,
      defaultFrom: 'your-email@example.com',
    }),
  ],
})
export class AppModule {}
```

---

### 2️⃣ Send an Email
In your service or controller:

```typescript
import { EmailService } from 'nestjs-email-module';

constructor(private readonly emailService: EmailService) {}

async sendTestEmail() {
  await this.emailService.sendMail({
    to: 'recipient@example.com',
    subject: 'Hello from NestJS',
    text: 'This is a test email.',
    html: '<strong>This is a test email.</strong>',
  });
}
```

---

## ⚙️ Configuration
Environment variables (`.env` file):

```env
SENDGRID_API_KEY=your-sendgrid-api-key
```

---

## 🛠 Supported Providers
- ✅ **SendGrid**  
- ✅ **AWS SES**  
- ✅ **Nodemailer (Custom SMTP)**  

---

## 🤝 Contributing
Want to improve this package? Follow these steps:

1. **Fork the repo**
2. **Create a new branch** (`git checkout -b feature-name`)
3. **Commit changes** (`git commit -m "Added feature"`)
4. **Push** (`git push origin feature-name`)
5. **Open a Pull Request (PR)** 🎉

---

## 📄 License
MIT License.

---

## 🔗 Links
- **NPM:** [nestjs-email-module](https://www.npmjs.com/package/nestjs-email-module)
- **GitHub:** [yourusername/nestjs-email-module](https://github.com/the-yathrikan/nestjs-email-module)

---

### 🚀 Happy Coding! 🎉

