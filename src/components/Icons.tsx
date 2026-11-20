import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size: number, rest: SVGProps<SVGSVGElement>): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
  ...rest,
});

export const ChevronDown = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size, { strokeWidth: 2, ...p })}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const MenuIcon = ({ size = 20, ...p }: IconProps) => (
  <svg {...base(size, { strokeWidth: 2, ...p })}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = ({ size = 20, ...p }: IconProps) => (
  <svg {...base(size, { strokeWidth: 2, ...p })}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const ArrowRight = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size, { strokeWidth: 2.2, ...p })}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ClockIcon = ({ size = 15, ...p }: IconProps) => (
  <svg {...base(size, { strokeWidth: 2, ...p })}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const BookIcon = ({ size = 26, ...p }: IconProps) => (
  <svg {...base(size, { strokeWidth: 1.8, ...p })}>
    <path d="M4 19.5V5a2 2 0 0 1 2-2h13v16H6.5A2.5 2.5 0 0 0 4 21.5" />
    <path d="M19 17v4H6.5" />
    <path d="M9 7h6" />
  </svg>
);

export const AppIcon = ({ size = 26, ...p }: IconProps) => (
  <svg {...base(size, { strokeWidth: 1.8, ...p })}>
    <rect x="3" y="4" width="18" height="16" rx="2.5" />
    <path d="M3 9h18" />
    <circle cx="6.5" cy="6.5" r="0.6" fill="currentColor" />
    <circle cx="9" cy="6.5" r="0.6" fill="currentColor" />
    <path d="M7 13h5M7 16h8" />
  </svg>
);

export const WrenchIcon = ({ size = 26, ...p }: IconProps) => (
  <svg {...base(size, { strokeWidth: 1.8, ...p })}>
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3.5 17.5a1.8 1.8 0 0 0 2.5 2.5l5.8-5.8a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.5-.5-2.4z" />
  </svg>
);

export const ArrowDown = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size, { strokeWidth: 2.2, ...p })}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </svg>
);

export const CheckIcon = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size, { strokeWidth: 2.2, ...p })}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

export const PlusIcon = ({ size = 20, ...p }: IconProps) => (
  <svg {...base(size, { strokeWidth: 2, ...p })}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const RepairIcon = ({ size = 22, ...p }: IconProps) => (
  <svg {...base(size, { strokeWidth: 1.8, ...p })}>
    <path d="M3 12a9 9 0 0 1 15.5-6.2L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-15.5 6.2L3 16" />
    <path d="M3 21v-5h5" />
  </svg>
);

export const QuoteIcon = ({ size = 22, ...p }: IconProps) => (
  <svg {...base(size, { strokeWidth: 1.8, ...p })}>
    <path d="M6 3h9l4 4v14H6z" />
    <path d="M14 3v5h5" />
    <path d="M9 13h6M9 17h4" />
  </svg>
);

export const LinkedInIcon =({ size = 18, ...p }: IconProps) => (
  <svg {...base(size, { strokeWidth: 1.8, ...p })}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const InstagramIcon = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size, { strokeWidth: 1.8, ...p })}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
);

export const WhatsAppIcon = ({ size = 17, ...p }: IconProps) => (
  <svg {...base(size, { strokeWidth: 1.9, ...p })}>
    <path d="M3 21l1.7-5A8.5 8.5 0 1 1 8 19.3z" />
  </svg>
);

export const PhoneIcon = ({ size = 17, ...p }: IconProps) => (
  <svg {...base(size, { strokeWidth: 1.9, ...p })}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
  </svg>
);

export const MailIcon = ({ size = 17, ...p }: IconProps) => (
  <svg {...base(size, { strokeWidth: 1.9, ...p })}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);
