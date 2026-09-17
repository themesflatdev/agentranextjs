interface NumberBadgeProps {
  number: string;
}

// Ported as-is from the source markup: `fill="url(#fillGradient)"` points at
// a gradient id that's never defined anywhere in the template, so browsers
// render it as an unpainted fill — which is what makes this a faint,
// stroke-only "ghost" number in the background rather than a bug to fix.
// The gradient id is namespaced per `number` (unlike the original, which
// repeats the same "borderGradient" id on every one of the 6 instances) so
// multiple badges on one page don't collide over a single duplicate id.
export default function NumberBadge({ number }: NumberBadgeProps) {
  const gradientId = `borderGradient-${number}`;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="200px">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
          <stop offset="77.35%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="url(#fillGradient)"
        stroke={`url(#${gradientId})`}
        strokeWidth="1"
      >
        {number}
      </text>
    </svg>
  );
}
