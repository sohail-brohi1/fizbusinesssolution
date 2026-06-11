export const CONTACT_EMAIL = 'jnaeem672@gmail.com';

const defaultSubject = 'Inquiry from FizBussinessSolution Website';
const defaultBody =
  'Hello,\n\nI would like to inquire about your academic writing services.\n\n';

export const MAILTO_URL = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(defaultSubject)}&body=${encodeURIComponent(defaultBody)}`;

export function buildMailtoUrl(subject?: string, body?: string): string {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const query = params.toString();
  return query ? `mailto:${CONTACT_EMAIL}?${query}` : `mailto:${CONTACT_EMAIL}`;
}
