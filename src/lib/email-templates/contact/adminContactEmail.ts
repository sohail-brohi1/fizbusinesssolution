import type { ContactFormData } from '@/types';
import { escapeHtml, formatMultiline, formatDateTime } from '../shared/escape';
import { wrapEmail } from '../shared/layout';
import {
  sectionTitle,
  infoBox,
  highlightCard,
  detailRow,
  tableSectionHeader,
  detailTable,
  statusBadge,
  metaRow,
  BRAND,
} from '../shared/components';

export function adminContactEmail({ name, email, subject, message }: ContactFormData): string {
  const safeName = escapeHtml(name);
  const safeSubject = escapeHtml(subject);

  const body = `
    ${sectionTitle('📬 New Contact Message', 'A visitor sent a message through the contact form.')}
    ${highlightCard('Subject', safeSubject)}
    ${metaRow([
      { label: 'From', value: safeName },
      { label: 'Email', value: escapeHtml(email) },
      { label: 'Status', value: statusBadge('Unread', '#92400e', '#fef3c7') },
    ])}
    ${infoBox(`Reply directly to <strong><a href="mailto:${escapeHtml(email)}" style="color:${BRAND.primary};text-decoration:none;">${escapeHtml(email)}</a></strong> to respond to this inquiry.`, 'info')}
    ${detailTable(`
      ${tableSectionHeader('Message Details')}
      ${detailRow('Name', safeName)}
      ${detailRow('Email', `<a href="mailto:${escapeHtml(email)}" style="color:${BRAND.primary};text-decoration:none;font-weight:600;">${escapeHtml(email)}</a>`)}
      ${detailRow('Subject', safeSubject)}
      ${detailRow('Message', formatMultiline(message))}
      ${detailRow('Received At', formatDateTime(new Date().toISOString()))}
    `)}
  `;

  return wrapEmail({
    title: `Contact: ${subject}`,
    preheader: `New message from ${name} — ${subject}`,
    bodyContent: body,
  });
}
