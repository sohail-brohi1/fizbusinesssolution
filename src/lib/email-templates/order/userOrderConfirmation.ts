import type { UserOrderConfirmationData } from '@/types';
import { escapeHtml, formatDateTime } from '../shared/escape';
import { wrapEmail } from '../shared/layout';
import {
  sectionTitle,
  infoBox,
  highlightCard,
  detailRow,
  detailTable,
  statusBadge,
  stepsList,
  metaRow,
  BRAND,
} from '../shared/components';

export interface UserOrderConfirmationOptions extends UserOrderConfirmationData {
  orderRef: string;
}

export function userOrderConfirmation({
  fullName,
  assignmentTopic,
  deadline,
  orderRef,
}: UserOrderConfirmationOptions): string {
  const safeName = escapeHtml(fullName);
  const safeTopic = escapeHtml(assignmentTopic);

  const body = `
    ${sectionTitle(`Order Confirmed, ${safeName}!`, 'We have received your assignment request and our team is on it.')}
    ${highlightCard('Your Assignment', safeTopic)}
    ${metaRow([
      { label: 'Order Ref', value: orderRef },
      { label: 'Deadline', value: deadline ? formatDateTime(deadline).split(',')[0] : 'As specified' },
      { label: 'Status', value: statusBadge('Under Review', '#1e40af', '#dbeafe') },
    ])}
    ${detailTable(`
      ${detailRow('Assignment Topic', safeTopic)}
      ${detailRow('Your Deadline', formatDateTime(deadline))}
      ${detailRow('Reference ID', `<strong style="color:${BRAND.primary};">${orderRef}</strong>`)}
    `)}
    ${infoBox('What happens next? An expert writer will be assigned within 2 hours. You will receive a quote via email or WhatsApp.', 'success')}
    ${sectionTitle('Next Steps')}
    ${stepsList([
      'Our team reviews your requirements and uploaded files.',
      'An expert writer is matched to your subject and deadline.',
      'You receive a personalized quote within 2 hours.',
      'Once confirmed, work begins — 100% AI-free and plagiarism-free.',
    ])}
    <p style="margin:24px 0 0;color:${BRAND.muted};font-size:14px;line-height:1.7;">
      Questions? Reply to this email or message us on WhatsApp anytime.<br/><br/>
      <strong style="color:${BRAND.navy};">The FizBussinessSolution Team</strong>
    </p>
  `;

  return wrapEmail({
    title: 'Order Received — FizBussinessSolution',
    preheader: `[${orderRef}] Your assignment "${assignmentTopic}" is being reviewed`,
    bodyContent: body,
  });
}
