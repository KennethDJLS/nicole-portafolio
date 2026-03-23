export function DoodleStar({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2L19.5 12.5L30 16L19.5 19.5L16 30L12.5 19.5L2 16L12.5 12.5L16 2Z" stroke="hsl(var(--brand-blue))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

export function DoodleWave({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 12C10 2 20 22 30 12C40 2 50 22 60 12C70 2 78 12 78 12" stroke="hsl(var(--brand-blue))" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

export function DoodleCheck({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="12" stroke="hsl(var(--brand-cyan))" strokeWidth="2" fill="none"/>
      <path d="M8 14L12 18L20 10" stroke="hsl(var(--brand-cyan))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function DoodleCircle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="hsl(var(--brand-purple))" strokeWidth="2" strokeDasharray="4 3" fill="none"/>
    </svg>
  );
}

export function DoodleArrow({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 32C12 20 20 12 32 8" stroke="hsl(var(--brand-blue))" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M24 6L32 8L30 16" stroke="hsl(var(--brand-blue))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}
