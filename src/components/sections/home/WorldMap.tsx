'use client'

export default function WorldMap() {
  const locations = [
    {
      id: 'india',
      label: 'India',
      city: 'Tamil Nadu',
      cx: 430,
      cy: 198,
      color: '#C9922B',
    },
    {
      id: 'uae',
      label: 'UAE',
      city: 'Dubai',
      cx: 390,
      cy: 185,
      color: '#C9922B',
    },
    {
      id: 'usa',
      label: 'USA',
      city: 'New York',
      cx: 155,
      cy: 160,
      color: '#C9922B',
    },
  ]

  return (
    <div className="relative w-full rounded-card overflow-hidden bg-navy/5
      border border-cream-border">
      <svg
        viewBox="0 0 800 400"
        className="w-full h-auto"
        aria-label="World map showing SS INTERNATIONAL GROUP presence in India, UAE, and USA"
      >
        {/* World map background image */}
        <image
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1280px-World_map_-_low_resolution.svg.png"
          x="0" y="0" width="800" height="400"
          opacity="0.15"
          preserveAspectRatio="xMidYMid meet"
        />

        {/* Blinking location markers */}
        {locations.map(loc => (
          <g key={loc.id}>
            {/* Outer pulse ring 1 */}
            <circle cx={loc.cx} cy={loc.cy} r="18" fill={loc.color}
              opacity="0.15">
              <animate attributeName="r" values="12;22;12"
                dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0;0.3"
                dur="2s" repeatCount="indefinite" />
            </circle>

            {/* Outer pulse ring 2 — offset */}
            <circle cx={loc.cx} cy={loc.cy} r="10" fill={loc.color}
              opacity="0.2">
              <animate attributeName="r" values="8;16;8"
                dur="2s" begin="0.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0;0.4"
                dur="2s" begin="0.5s" repeatCount="indefinite" />
            </circle>

            {/* Solid center dot */}
            <circle cx={loc.cx} cy={loc.cy} r="5"
              fill={loc.color} stroke="white" strokeWidth="1.5" />

            {/* Label */}
            <text x={loc.cx} y={loc.cy - 14}
              textAnchor="middle"
              fontSize="9"
              fontFamily="Inter, sans-serif"
              fontWeight="600"
              fill={loc.color}
              letterSpacing="0.05em">
              {loc.label.toUpperCase()}
            </text>
            <text x={loc.cx} y={loc.cy - 4}
              textAnchor="middle"
              fontSize="7"
              fontFamily="Inter, sans-serif"
              fill="#888"
              letterSpacing="0.03em">
              {loc.city}
            </text>
          </g>
        ))}

        {/* Connection lines between locations */}
        <path
          d={`M ${155} ${160} Q 290 120 ${390} ${185}`}
          fill="none" stroke="#C9922B" strokeWidth="0.8"
          strokeDasharray="4 4" opacity="0.4"
        />
        <path
          d={`M ${390} ${185} Q 410 180 ${430} ${198}`}
          fill="none" stroke="#C9922B" strokeWidth="0.8"
          strokeDasharray="4 4" opacity="0.4"
        />
      </svg>

      {/* Legend */}
      <div className="flex justify-center gap-8 p-4 border-t border-cream-border">
        {locations.map(loc => (
          <div key={loc.id} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gold" />
            <span className="text-xs font-sans text-navy/60 uppercase tracking-caps">
              {loc.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
