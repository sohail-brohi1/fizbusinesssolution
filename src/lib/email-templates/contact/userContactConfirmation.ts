import type { UserContactConfirmationData } from '@/types';
import { escapeHtml } from '../shared/escape';
import { wrapEmail } from '../shared/layout';
import { sectionTitle, infoBox, stepsList, BRAND } from '../shared/components';

export function userContactConfirmation({ name }: UserContactConfirmationData): string {
  const safeName = escapeHtml(name);

  const body = `
    ${sectionTitle(`Thank You, ${safeName}!`, 'Your message has been delivered to our support team.')}
    <p style="margin:0 0 20px;color:${BRAND.muted};font-size:15px;line-height:1.8;">
      We have received your inquiry and will get back to you within
      <strong style="color:${BRAND.navy};">24 hours</strong>. For urgent assignment help, use the order form or WhatsApp for a faster response.
    </p>
    ${infoBox('Need urgent help? Message us on WhatsApp — we are available 24/7 for assignment orders and quick questions.', 'success')}
    ${sectionTitle('What to Expect')}
    ${stepsList([
      'Our team reads your message and assigns it to the right specialist.',
      'You receive a detailed reply within 24 hours (often much sooner).',
      'For assignment orders, include your deadline and requirements for a faster quote.',
    ])}
    <p style="margin:28px 0 0;color:${BRAND.muted};font-size:14px;line-height:1.7;">
      Best regards,<br/>
      <strong style="color:${BRAND.navy};">The FizBussinessSolution Team</strong>
    </p>
  `;

  return wrapEmail({
    title: 'We Received Your Message',
    preheader: 'Thank you for contacting FizBussinessSolution — we will reply soon',
    bodyContent: body,
  });
}
