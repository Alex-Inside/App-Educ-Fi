// Kapi — la mascotte pièce souriante. SVG inline, taille paramétrable.
// `bob` : légère animation de flottement (respecte prefers-reduced-motion via CSS).
export default function KapiMascot({ size = 72, bob = false, className = '' }) {
  return (
    <svg
      className={`kapi ${bob ? 'kapi-bob' : ''} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label="Kapi, la mascotte pièce"
    >
      {/* tranche de la pièce (épaisseur) */}
      <ellipse cx="50" cy="54" rx="40" ry="40" fill="#D88C1B" />
      {/* face */}
      <circle cx="50" cy="50" r="40" fill="#F2A93B" />
      <circle cx="50" cy="50" r="40" fill="none" stroke="#D88C1B" strokeWidth="3" />
      {/* liseré intérieur */}
      <circle cx="50" cy="50" r="31" fill="none" stroke="#F7C173" strokeWidth="2.5" />
      {/* yeux */}
      <circle cx="38" cy="45" r="4.4" fill="#5A3A08" />
      <circle cx="62" cy="45" r="4.4" fill="#5A3A08" />
      {/* petites brillances */}
      <circle cx="39.4" cy="43.6" r="1.3" fill="#fff" />
      <circle cx="63.4" cy="43.6" r="1.3" fill="#fff" />
      {/* sourire */}
      <path
        d="M36 60 Q50 72 64 60"
        fill="none"
        stroke="#5A3A08"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      {/* joues */}
      <circle cx="30" cy="56" r="4" fill="#E8674A" opacity="0.5" />
      <circle cx="70" cy="56" r="4" fill="#E8674A" opacity="0.5" />
    </svg>
  )
}
