type Props = {
  className?: string;
  title?: string;
};

const typeStyle = {
  fontFamily: "var(--font-bebas), Impact, system-ui, sans-serif",
  fontSize: "38px",
  letterSpacing: "0.34em",
} as const;

/**
 * Dark-theme wordmark: light type on dark UI + lime chevron (site accent).
 * Vector recreation of the brand mark; replace with official SVG paths anytime.
 */
export function KrafitLogoDark({ className = "", title = "KRAFIT" }: Props) {
  return (
    <svg
      className={`block shrink-0 text-foreground ${className}`}
      viewBox="0 0 392 52"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <text x="0" y="40" fill="currentColor" style={typeStyle}>
        KRA
      </text>
      <g transform="translate(118, 4)">
        <path
          fill="var(--accent)"
          d="M0 40.5L22.5 4L45 40.5H34.2L22.5 17.2L10.8 40.5H0Z"
        />
        <path fill="var(--background)" d="M22.5 35.2L15.6 22.4H29.4L22.5 35.2Z" />
      </g>
      <text x="176" y="40" fill="currentColor" style={typeStyle}>
        IT
      </text>
    </svg>
  );
}
