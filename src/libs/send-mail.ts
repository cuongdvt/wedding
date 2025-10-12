'use server';

import nodemailer from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';

// Looking to send emails in production? Check out our Email API/SMTP product!
const transporter = nodemailer.createTransport({
  // Looking to send emails in production? Check out our Email API/SMTP product!
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '586005919f591a',
    pass: 'd29a0c11dcecc3',
  },
});

export interface ISendmailBody {
  from: string;
  to: string;
  subject: string;
  text: string;
}

const sendMail = async (props: ISendmailBody): Promise<SMTPTransport.SentMessageInfo | null> => {
  try {
    await transporter.verify();
  } catch (error) {
    console.error('Send mail - Something Went Wrong', error);
    return null;
  }
  return await transporter.sendMail({
    from: props.from,
    to: props.to,
    subject: props.subject,
    text: props.text,
  });
};

export default sendMail;
