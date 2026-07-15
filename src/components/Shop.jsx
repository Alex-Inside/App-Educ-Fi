import { SHOP, isXpBoostActive } from '../lib/gamification.js'
import { getModule, getModuleNumber } from '../data/curriculum.js'
import { isModuleComplete } from '../lib/progression.js'

// Boutique — dépense tes pièces (jamais d'argent réel). Les simulateurs
// premium se débloquent avec des pièces UNE FOIS le module lié terminé :
// les pièces récompensent l'apprentissage par de vrais outils.
export default function Shop({ gam, completedSubs = [], activeAccent, onBuy, onApplyAccent, onBack }) {
  const boostActive = isXpBoostActive(gam)
  const boostLeft = boostActive ? Math.ceil((gam.xpBoostUntil - Date.now()) / 3600000) : 0
  const tools = gam.tools ?? []

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
          const isTool = item.kind === 'tool'
          const toolOwned = isTool && tools.includes(item.tool)
          const moduleOk = isTool && isModuleComplete(item.requiresModule, completedSubs)
          const reqModule = isTool ? getModule(item.requiresModule) : null

          let right
          if (isTool) {
            if (toolOwned) right = <span className="shop-owned">Débloqué ✓</span>
            else right = (
              <button className="shop-buy" disabled={!canBuy || !moduleOk} onClick={() => onBuy(item)}>
                🪙 {item.price}
              </button>
            )
          } else if (item.kind === 'theme') {
            if (active) right = <span className="shop-owned">Actif ✓</span>
            else if (owned) right = <button className="shop-buy ghost" onClick={() => onApplyAccent(item.accent)}>Appliquer</button>
            else right = <button className="shop-buy" disabled={!canBuy} onClick={() => onBuy(item)}>🪙 {item.price}</button>
          } else if (item.kind === 'boost' && boostActive) {
            right = <span className="shop-owned">Actif · {boostLeft} h</span>
          } else {
            right = <button className="shop-buy" disabled={!canBuy} onClick={() => onBuy(item)}>🪙 {item.price}</button>
          }

          return (
            <div key={item.id} className={`shop-item ${isTool ? 'shop-item-tool' : ''}`}>
              <span className="shop-emoji" aria-hidden="true">{item.emoji}</span>
              <div className="shop-info">
                <div className="shop-name">
                  {item.name}
                  {item.kind === 'stack' && stackCount > 0 && <span className="shop-count">×{stackCount}</span>}
                </div>
                <div className="shop-desc">{item.desc}</div>
                {isTool && !toolOwned && (
                  <div className={`shop-req ${moduleOk ? 'ok' : ''}`}>
                    {moduleOk
                      ? `✓ Module ${getModuleNumber(item.requiresModule)} terminé — à toi de jouer`
                      : `🔒 Termine le module ${getModuleNumber(item.requiresModule)} · ${reqModule.titre}`}
                  </div>
                )}
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
