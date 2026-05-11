export const WA_NUMBER = '573229064201';

export function whatsappLink(message) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}
