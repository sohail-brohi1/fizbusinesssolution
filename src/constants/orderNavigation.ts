export const ORDER_FORM_ID = 'order-form';
export const ORDER_FORM_QUERY = 'from';
export const ORDER_FORM_PATH = `/contact?${ORDER_FORM_QUERY}`;

export function shouldScrollToOrderForm(searchParams: URLSearchParams): boolean {
  return searchParams.has(ORDER_FORM_QUERY) || searchParams.get('scrollTo') === 'form';
}

export function scrollToOrderForm() {
  document.getElementById(ORDER_FORM_ID)?.scrollIntoView({ behavior: 'smooth' });
}
