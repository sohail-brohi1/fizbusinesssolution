import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { WHATSAPP_URL } from '@/constants/whatsapp';

type WhatsAppLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'rel'> & {
  href?: string;
  children: ReactNode;
};

/** Plain anchor with direct wa.me link — reliable in new tabs and on mobile */
export default function WhatsAppLink({
  href = WHATSAPP_URL,
  children,
  ...props
}: WhatsAppLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}
