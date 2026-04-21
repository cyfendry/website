interface LogoMarkProps {
  variant?: "color" | "white";
  className?: string;
}

export default function LogoMark({ variant = "color", className = "w-9 h-9" }: LogoMarkProps) {
  if (variant === "white") {
    return (
      <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M 56 24 A 32 32 0 1 0 56 76" fill="none" stroke="white" strokeWidth="12" strokeLinecap="round"/>
        <path d="M 52 30 A 24 24 0 1 0 52 70" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M 47 37 A 16 16 0 1 0 47 63" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="cMark" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#02c19d" />
          <stop offset="55%" stopColor="#008E73" />
          <stop offset="100%" stopColor="#021a62" />
        </linearGradient>
      </defs>
      <path d="M 56 24 A 32 32 0 1 0 56 76" fill="none" stroke="url(#cMark)" strokeWidth="12" strokeLinecap="round"/>
      <path d="M 52 30 A 24 24 0 1 0 52 70" fill="none" stroke="rgba(2,26,98,0.42)" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M 47 37 A 16 16 0 1 0 47 63" fill="none" stroke="rgba(2,26,98,0.27)" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}
