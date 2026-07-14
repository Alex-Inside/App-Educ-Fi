import { SHOP, isXpBoostActive } from '../lib/gamification.js'

// Boutique — dépense tes pièces (jamais d'argent réel). Boosts, jokers,
// gels de série et thèmes cosmétiques.
export default function Shop({ gam, activeAccent, onBuy, onApplyAccent, onBack }) {
  const boostActive = isXpBoostActive(gam)
  const boostLeft = boostActive ? Math.ceil((gam.xpBoostUntil - Date.now()) / 3600000) : 0

  return (
    <>
      <div className="module-header">
        <button className="back-link" onClick={onBack}>← Récompenses</button>
        <span className="module-header-title">🛍️ Boutique</span>
      </div>

      <div className="shop-balance">
        <span className="shop-coins">🪙 {gam.coins}</span>
        <span className="shop-balance-label">pièces disponibles</span>
      </div>
      <p className="dash-intro">Gagne des pièces en apprenant, puis dépense-les ici. Jamais d’argent réel, jamais de pub.</p>

      <div className="shop-list">
        {SHOP.map((item) => {
          const owned = item.kind === 'theme' && gam.themes.includes(item.accent)
          const active = item.kind === 'theme' && activeAccent === item.accent
          const canBuy = gam.coins >= item.price
          const stackCount = item.kind === 'stack' ? gam[item.field] ?? 0 : 0

          let right
          if (item.kind === 'theme') {
            if (active) right = <span className="shop-owned">Actif ✓</span>
            else if (owned) right = <button className="shop-buy ghost" onClick={() => onApplyAccent(item.accent)}>Appliquer</button>
            else right = <button className="shop-buy" disabled={!canBuy} onClick={() => onBuy(item)}>🪙 {item.price}</button>
          } else if (item.kind === 'boost' && boostActive) {
            right = <span className="shop-owned">Actif · {boostLeft} h</span>
          } else {
            right = <button className="shop-buy" disabled={!canBuy} onClick={() => onBuy(item)}>🪙 {item.price}</button>
          }

          return (
            <div key={item.id} className="shop-item">
              <span className="shop-emoji" aria-hidden="true">{item.emoji}</span>
              <div className="shop-info">
                <div className="shop-name">
                  {item.name}
                  {item.kind === 'stack' && stackCount > 0 && <span className="shop-count">×{stackCount}</span>}
                </div>
                <div className="shop-desc">{item.desc}</div>
              </div>
              {right}
            </div>
          )
        })}
      </div>

      <p className="league-note">Les pièces sont une monnaie de jeu, sans valeur marchande. Aucun achat en argent réel dans {`l’app`}.</p>
    </>
  )
}
