import { useState } from 'react'
import { computeBudget, computeCompound, computeGoal, euros } from '../lib/simulators.js'

// Les simulateurs FinPath : la théorie des modules appliquée à TES chiffres.
// Tout se calcule dans le navigateur — rien n'est envoyé, rien n'est vendu.

const TABS = [
  { id: 'budget', emoji: '💸', label: 'Mon budget' },
  { id: 'compound', emoji: '📈', label: 'Boule de neige' },
  { id: 'goal', emoji: '🎯', label: 'Mon projet' },
]

export default function Tools({ onBack }) {
  const [tab, setTab] = useState('budget')

  return (
    <>
      <div className="module-header">
        <button className="back-link" onClick={onBack}>
          ← Parcours
        </button>
        <span className="module-header-title">🧰 Simulateurs</span>
      </div>

      <p className="dash-intro">
        Tes chiffres, les règles du parcours, zéro blabla. Tout reste sur ton
        appareil : rien n'est envoyé, rien ne t'est vendu.
      </p>

      <div className="tools-tabs" role="tablist" aria-label="Choisir un simulateur">
        {TABS.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tab === t.id}
            className={`tools-tab ${tab === t.id ? 'active' : ''}`}
            onClick={() => setTab(t.id)}
          >
            {t.emoji} {t.label}
          </button>
        ))}
      </div>

      {tab === 'budget' && <BudgetTool />}
      {tab === 'compound' && <CompoundTool />}
      {tab === 'goal' && <GoalTool />}
    </>
  )
}

function Field({ label, suffix, value, onChange, ...props }) {
  return (
    <label className="field">
      <span className="field-label">{label}</span>
      <span className="field-input">
        <input
          type="number"
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          {...props}
        />
        {suffix && <span className="field-suffix">{suffix}</span>}
      </span>
    </label>
  )
}

// ---------- Budget 50/30/20 ----------

function BudgetTool() {
  const [revenu, setRevenu] = useState('')
  const [loyer, setLoyer] = useState('')
  const result = computeBudget(Number(revenu), Number(loyer) || 0)

  return (
    <div className="content-card">
      <span className="content-tag">💸 Répartir ton revenu du mois</span>
      <Field label="Ton revenu net mensuel" suffix="€" value={revenu} onChange={setRevenu} min="0" placeholder="1 400" />
      <Field label="Ton loyer (optionnel, pour adapter la règle)" suffix="€" value={loyer} onChange={setLoyer} min="0" placeholder="550" />

      {result && (
        <div className="tool-result" aria-live="polite">
          <p className="tool-note">{result.note}</p>
          <BudgetBar label={`Besoins (${result.rule.besoins} %)`} value={result.besoins} pct={result.rule.besoins} tone="besoins" />
          <BudgetBar label={`Envies (${result.rule.envies} %)`} value={result.envies} pct={result.rule.envies} tone="envies" />
          <BudgetBar label={`Épargne (${result.rule.epargne} %)`} value={result.epargne} pct={result.rule.epargne} tone="epargne" />
          <p className="tool-tip">
            💡 Le bon réflexe : un virement automatique de {euros(result.epargne)} vers ton
            livret le lendemain de la paie. L'épargne se paie en premier (module 1.4).
          </p>
        </div>
      )}
    </div>
  )
}

function BudgetBar({ label, value, pct, tone }) {
  return (
    <div className="budget-row">
      <div className="budget-row-head">
        <span>{label}</span>
        <strong>{euros(value)}</strong>
      </div>
      <div className="mini-track">
        <div className={`mini-fill budget-${tone}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

// ---------- Intérêts composés ----------

function CompoundTool() {
  const [mensuel, setMensuel] = useState('50')
  const [taux, setTaux] = useState('5')
  const [annees, setAnnees] = useState('10')
  const result = computeCompound(Number(mensuel), Number(taux), Number(annees))

  return (
    <div className="content-card">
      <span className="content-tag">📈 L'effet boule de neige (module 2.3)</span>
      <Field label="Versement chaque mois" suffix="€" value={mensuel} onChange={setMensuel} min="0" />
      <Field label="Rendement annuel moyen" suffix="%" value={taux} onChange={setTaux} min="0" max="15" step="0.5" />
      <label className="field">
        <span className="field-label">Pendant {annees} an{Number(annees) > 1 ? 's' : ''}</span>
        <input
          type="range"
          min="1"
          max="40"
          value={annees}
          onChange={(e) => setAnnees(e.target.value)}
          aria-label="Durée en années"
        />
      </label>

      {result && (
        <div className="tool-result" aria-live="polite">
          <CompoundChart series={result.series} />
          <div className="tool-stats">
            <div className="tool-stat">
              <span className="tool-stat-label">Tu auras versé</span>
              <strong>{euros(result.verse)}</strong>
            </div>
            <div className="tool-stat">
              <span className="tool-stat-label">Intérêts gagnés</span>
              <strong className="gain">+{euros(result.interets)}</strong>
            </div>
            <div className="tool-stat">
              <span className="tool-stat-label">Total final</span>
              <strong>{euros(result.final)}</strong>
            </div>
          </div>
          <p className="tool-tip">
            💡 Refais le calcul avec 10 ans de plus : c'est la durée, pas le taux, qui
            fait exploser la boule de neige. Rendement historique moyen d'un ETF Monde :
            ~7 %/an sur longue période — jamais garanti.
          </p>
        </div>
      )}
    </div>
  )
}

// Courbe SVG légère : solde (accent) vs versements cumulés (pointillés).
function CompoundChart({ series }) {
  const W = 300
  const H = 130
  const PAD = 6
  const max = series[series.length - 1].solde
  const x = (i) => PAD + (i / Math.max(series.length - 1, 1)) * (W - PAD * 2)
  const y = (v) => H - PAD - (v / max) * (H - PAD * 2)
  const line = (key) => series.map((p, i) => `${x(i)},${y(p[key])}`).join(' ')

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="compound-chart"
      role="img"
      aria-label={`Courbe sur ${series.length} ans : ${series[series.length - 1].solde} euros au total, dont ${series[series.length - 1].verse} euros versés.`}
    >
      <polygon
        points={`${x(0)},${y(0)} ${line('solde')} ${x(series.length - 1)},${H - PAD}`}
        className="chart-area"
      />
      <polyline points={line('solde')} className="chart-solde" fill="none" />
      <polyline points={line('verse')} className="chart-verse" fill="none" />
    </svg>
  )
}

// ---------- Objectif de projet ----------

function GoalTool() {
  const [montant, setMontant] = useState('')
  const [mois, setMois] = useState('12')
  const [capacite, setCapacite] = useState('')
  const result = computeGoal(Number(montant), Number(mois), Number(capacite) || null)

  return (
    <div className="content-card">
      <span className="content-tag">🎯 Financer un projet (module 2.4)</span>
      <Field label="Le montant qu'il te faut" suffix="€" value={montant} onChange={setMontant} min="0" placeholder="1 200 (permis, ordi, dépôt de garantie…)" />
      <Field label="Dans combien de mois ?" suffix="mois" value={mois} onChange={setMois} min="1" />
      <Field label="Ce que tu peux épargner par mois (optionnel)" suffix="€" value={capacite} onChange={setCapacite} min="0" />

      {result && (
        <div className="tool-result" aria-live="polite">
          <div className="tool-stats">
            <div className="tool-stat">
              <span className="tool-stat-label">Effort mensuel</span>
              <strong>{euros(result.mensualite)}</strong>
            </div>
          </div>
          {result.verdict === 'confortable' && (
            <p className="tool-note good">✓ Confortable pour ta capacité d'épargne. Programme le virement automatique et n'y pense plus.</p>
          )}
          {result.verdict === 'juste' && (
            <p className="tool-note">⚠️ Ça passe, mais sans marge : le moindre imprévu tapera dans ce budget. Garde ton épargne de précaution à part.</p>
          )}
          {result.verdict === 'hors_portee' && (
            <p className="tool-note bad">
              ✗ Au-dessus de ta capacité actuelle. Version réaliste : vise{' '}
              {result.moisRealiste} mois au lieu de {mois}. Mieux vaut un objectif tenu
              qu'un objectif abandonné — et surtout pas de crédit conso pour combler.
            </p>
          )}
          <p className="tool-tip">
            💡 Épargne de projet ≠ épargne de précaution : deux enveloppes séparées,
            sinon la première panne de scooter mange ton permis.
          </p>
        </div>
      )}
    </div>
  )
}
