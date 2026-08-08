type IconProps = {
  className?: string;
};

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function MenuIcon({ className = "size-6" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function CloseIcon({ className = "size-6" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "size-6" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M7 17.5 3.5 21l1.13-3.87A8.5 8.5 0 1 1 7 17.5Z" />
      <path d="M8.5 9.5c0 3.5 2.5 6 6 6 .3 0 .6-.4.6-.9l-.2-1.4a.7.7 0 0 0-.5-.6l-1.6-.5a.7.7 0 0 0-.7.2l-.5.6a5 5 0 0 1-2.1-2.1l.6-.5a.7.7 0 0 0 .2-.7l-.5-1.6a.7.7 0 0 0-.6-.5L7.9 7.4c-.5 0-.9.3-.9.6" />
    </svg>
  );
}

export function PhoneIcon({ className = "size-6" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M6 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L15 12l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function MailIcon({ className = "size-6" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="m4 6.5 8 6 8-6" />
    </svg>
  );
}

export function InstagramIcon({ className = "size-6" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ArrowDownIcon({ className = "size-6" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <line x1="12" y1="4" x2="12" y2="20" />
      <path d="m6 14 6 6 6-6" />
    </svg>
  );
}

export function ChevronRightIcon({ className = "size-6" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

export function CheckIcon({ className = "size-6" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="m4 12 5 5L20 6" />
    </svg>
  );
}

export function LockIcon({ className = "size-6" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="5" y="11" width="14" height="9" rx="1" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

export function CalendarIcon({ className = "size-6" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="1" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="8" y1="3" x2="8" y2="7" />
      <line x1="16" y1="3" x2="16" y2="7" />
    </svg>
  );
}

export function BadgeIcon({ className = "size-6" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="9" r="6" />
      <path d="m8 14-2 7 6-3 6 3-2-7" />
    </svg>
  );
}

export function PinIcon({ className = "size-6" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.2" />
    </svg>
  );
}

export function ClockIcon({ className = "size-6" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}
