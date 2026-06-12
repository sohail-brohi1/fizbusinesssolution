import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/lib/mailer';
import {
  adminOrderEmail,
  userOrderConfirmation,
  buildEmailAttachments,
  generateOrderRef,
} from '@/lib/email-templates';
import { mailCredentials } from '@/constants/mailCredentials';
import type { OrderFormData } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const data = (await request.json()) as OrderFormData;

    if (!data.fullName?.trim() || !data.email?.trim() || !data.phone?.trim()) {
      return NextResponse.json({ success: false, error: 'Name, email, and phone are required.' }, { status: 400 });
    }

    if (!data.assignmentTopic?.trim() || !data.deadline) {
      return NextResponse.json({ success: false, error: 'Assignment topic and deadline are required.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json({ success: false, error: 'Invalid email address.' }, { status: 400 });
    }

    const orderRef = generateOrderRef();
    const attachments = await buildEmailAttachments(data.uploadedFiles);

    await sendMail({
      to: mailCredentials.to,
      subject: `[New Order ${orderRef}] ${data.assignmentTopic} — ${data.fullName}`,
      html: adminOrderEmail({ data, orderRef, attachmentCount: attachments.length }),
      replyTo: data.email,
      attachments,
    });

    await sendMail({
      to: data.email,
      subject: `Order Received (${orderRef}) — FizBussinessSolution`,
      html: userOrderConfirmation({
        fullName: data.fullName,
        assignmentTopic: data.assignmentTopic,
        deadline: data.deadline,
        orderRef,
      }),
    });

    return NextResponse.json({ success: true, message: 'Order submitted successfully!' });
  } catch (error) {
    console.error('Order email error:', error);
    return NextResponse.json({ success: false, error: 'Failed to submit order. Please try again.' }, { status: 500 });
  }
}
