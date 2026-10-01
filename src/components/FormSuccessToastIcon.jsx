function FormSuccessToastIcon() {
  return (
    <svg
      viewBox="0 0 220 150"
      width="112"
      height="112"
      aria-hidden="true"
      style={{ display: 'block' }}
    >
      <defs>
        <linearGradient id="fuzzyBlue" x1="0" x2="1">
          <stop offset="0%" stopColor="#9de5ff" />
          <stop offset="100%" stopColor="#4bb0f5" />
        </linearGradient>
        <linearGradient id="signWood" x1="0" x2="1">
          <stop offset="0%" stopColor="#f5d9af" />
          <stop offset="100%" stopColor="#c98b57" />
        </linearGradient>
      </defs>

      <g transform="translate(4 4)">
        <ellipse cx="72" cy="112" rx="44" ry="12" fill="rgba(15, 23, 42, 0.18)" />

        <path d="M64 98 L42 116 L26 116 L34 90 Z" fill="url(#fuzzyBlue)" stroke="#111827" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M84 98 L109 116 L124 116 L118 90 Z" fill="url(#fuzzyBlue)" stroke="#111827" strokeWidth="2.5" strokeLinejoin="round" />

        <path d="M46 30 Q58 18 72 22 Q88 18 100 30 L112 86 L40 86 Z" fill="url(#fuzzyBlue)" stroke="#111827" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="76" cy="52" r="28" fill="#dff9ff" stroke="#111827" strokeWidth="2.5" />
        <circle cx="67" cy="52" r="4.2" fill="#111827" />
        <circle cx="86" cy="52" r="4.2" fill="#111827" />
        <path d="M67 66 Q76 74 85 66" fill="none" stroke="#111827" strokeWidth="2.8" strokeLinecap="round" />

        <path d="M116 56 L162 34 L180 46 L177 78 L132 94 Z" fill="url(#signWood)" stroke="#111827" strokeWidth="2.4" strokeLinejoin="round" />
        <text x="160" y="67" textAnchor="middle" fontSize="13" fill="#2a1d12" fontWeight="800" style={{ fontFamily: 'Arial, sans-serif' }}>OK</text>

        <circle cx="181" cy="42" r="12" fill="#dcfce7" stroke="#111827" strokeWidth="2.2" />
        <path d="M175 42 L179 46 L188 36" fill="none" stroke="#111827" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  )
}

export default FormSuccessToastIcon
