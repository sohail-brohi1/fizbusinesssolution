import nodemailer, { type Transporter } from 'nodemailer';
import { mailCredentials } from '@/constants/mailCredentials';
import type { SendMailOptions } from '@/types';

let transporter: Transporter | null = null;

export function getTransporter(): Transporter {
  if (transporter) return transporter;

  transporter = nodemailer.createTransport({
    host: mailCredentials.host,
    port: mailCredentials.port,
    secure: false,
    auth: {
      user: mailCredentials.user,
      pass: mailCredentials.pass,
    },
  });

  return transporter;
}

export async function sendMail({ to, subject, html, replyTo, attachments }: SendMailOptions) {
  const transport = getTransporter();
  const from = `"FizBussinessSolution" <${mailCredentials.user}>`;

  return transport.sendMail({
    from,
    to,
    replyTo: replyTo || mailCredentials.user,
    subject,
    html,
    attachments,
  });
}
