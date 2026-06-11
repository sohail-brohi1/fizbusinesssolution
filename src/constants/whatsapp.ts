export const WHATSAPP_PHONE = '971543800388';
export const WHATSAPP_NUMBER = '+971 54 380 0388';
export const WHATSAPP_MESSAGE =
  'Hello! I need help with my assignment from FizBussinessSolution.';

/** Direct wa.me link — opens WhatsApp chat in app or web */
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export function buildWhatsAppUrl(message = WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
