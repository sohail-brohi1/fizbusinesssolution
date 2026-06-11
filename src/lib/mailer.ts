import nodemailer, { type Transporter } from 'nodemailer';
import type { SendMailOptions } from '@/types';

let transporter: Transporter | null = null;

export function getTransporter(): Transporter {
  if (transporter) return transporter;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    throw new Error('SMTP configuration missing. Set SMTP_HOST, SMTP_USER, and SMTP_PASS in .env');
  }

  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  return transporter;
}

export async function sendMail({ to, subject, html, replyTo, attachments }: SendMailOptions) {
  const transport = getTransporter();
  const from = `"FizBussinessSolution" <${process.env.SMTP_USER}>`;

  return transport.sendMail({
    from,
    to,
    replyTo: replyTo || process.env.SMTP_USER,
    subject,
    html,
    attachments,
  });
}
