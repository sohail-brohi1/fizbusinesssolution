import type { OrderFormData } from '@/types';
import { escapeHtml, formatMultiline, formatDateTime } from '../shared/escape';
import { wrapEmail } from '../shared/layout';
import {
  sectionTitle,
  infoBox,
  highlightCard,
  detailRow,
  tableSectionHeader,
  detailTable,
  attachmentList,
  statusBadge,
  metaRow,
  BRAND,
} from '../shared/components';

export interface AdminOrderEmailOptions {
  data: OrderFormData;
  orderRef: string;
  attachmentCount?: number;
}

export function adminOrderEmail({ data, orderRef, attachmentCount = 0 }: AdminOrderEmailOptions): string {
  const {
    fullName,
    email,
    countryCode,
    phone,
    studyCountry,
    assignmentTopic,
    department,
    subject,
    deadline,
    educationLevel,
    paperType,
    pagesWords,
    references,
    requirements,
    uploadedFiles = [],
  } = data;

  const safeName = escapeHtml(fullName);
  const safeTopic = escapeHtml(assignmentTopic);
  const fileCount = uploadedFiles.length;
  const attachedNote =
    attachmentCount > 0
      ? `<strong>${attachmentCount}</strong> file(s) are attached to this email. Links are also provided below.`
      : fileCount > 0
        ? 'Files could not be attached automatically — use the download links below.'
        : 'No files were uploaded with this order.';

  const body = `
    ${sectionTitle('📋 New Assignment Order', `Reference: <strong style="color:${BRAND.primary};">${orderRef}</strong>`)}
    ${highlightCard('Assignment Topic', safeTopic)}
    ${metaRow([
      { label: 'Paper Type', value: escapeHtml(paperType || '—') },
      { label: 'Deadline', value: formatDateTime(deadline).split(',')[0] || '—' },
      { label: 'Status', value: statusBadge('New Order', '#92400e', '#fef3c7') },
    ])}
    ${infoBox(`<strong>${safeName}</strong> submitted a new assignment request. Review all details below and respond within 2 hours.`, 'warning')}
    ${detailTable(`
      ${tableSectionHeader('👤 Personal Details')}
      ${detailRow('Full Name', safeName)}
      ${detailRow('Email', `<a href="mailto:${escapeHtml(email)}" style="color:${BRAND.primary};text-decoration:none;font-weight:600;">${escapeHtml(email)}</a>`)}
      ${detailRow('WhatsApp', escapeHtml(`${countryCode || ''} ${phone}`.trim()))}
      ${detailRow('Study Country', studyCountry ? escapeHtml(studyCountry) : '—')}
      ${tableSectionHeader('📚 Assignment Details')}
      ${detailRow('Topic', safeTopic)}
      ${detailRow('Department', department ? escapeHtml(department) : '—')}
      ${detailRow('Subject', subject ? escapeHtml(subject) : '—')}
      ${detailRow('Deadline', formatDateTime(deadline))}
      ${detailRow('Education Level', educationLevel ? escapeHtml(educationLevel) : '—')}
      ${detailRow('Paper Type', paperType ? escapeHtml(paperType) : '—')}
      ${detailRow('Pages / Words', pagesWords ? escapeHtml(pagesWords) : '—')}
      ${detailRow('References', references ? escapeHtml(references) : '—')}
      ${detailRow('Requirements', requirements ? formatMultiline(requirements) : '—')}
      ${detailRow('Submitted At', formatDateTime(new Date().toISOString()))}
    `)}
    ${sectionTitle('📎 Uploaded Files', attachedNote)}
    ${attachmentList(uploadedFiles, attachmentCount > 0)}
  `;

  return wrapEmail({
    title: `New Order: ${assignmentTopic}`,
    preheader: `[${orderRef}] Assignment order from ${fullName} — ${paperType || 'Assignment'}`,
    bodyContent: body,
  });
}
