// Simulateurs FinPath — fonctions pures, aucune dépendance.
// De la pédagogie appliquée : les mêmes règles que les modules, sur les
// chiffres de l'utilisateur. Aucun produit vendu, aucune donnée envoyée.

// ---------- Budget 50/30/20 (adaptatif) ----------

// Répartit un revenu net selon la règle 50/30/20, en l'adaptant si le loyer
// est lourd (zone chère) — exactement comme le module 1.2 l'enseigne.
export function computeBudget(revenu, loyer = 0) {
  if (!revenu || revenu <= 0) return null

  let rule = { besoins: 50, envies: 30, epargne: 20 }
  let note = 'La règle classique 50/30/20 fonctionne pour toi.'

  const partLoyer = (loyer / revenu) * 100
  if (partLoyer > 45) {
    rule = { besoins: 70, envies: 20, epargne: 10 }
    note =
      'Ton loyer pèse lourd : on passe en 70/20/10. Garder une épargne, même petite, reste la priorité.'
  } else if (partLoyer > 33) {
    rule = { besoins: 60, envies: 25, epargne: 15 }
    note = 'Loyer élevé : la règle adaptée 60/25/15 est plus réaliste pour toi.'
  }

  return {
    rule,
    note,
    partLoyer: loyer > 0 ? Math.round(partLoyer) : null,
    besoins: Math.round((revenu * rule.besoins) / 100),
    envies: Math.round((revenu * rule.envies) / 100),
    epargne: Math.round((revenu * rule.epargne) / 100),
  }
}

// ---------- Intérêts composés ----------

// Versement mensuel à taux annuel donné : série année par année pour la
// courbe, plus les totaux (versé, intérêts, final).
export function computeCompound(mensuel, tauxAnnuel, annees) {
  if (!mensuel || mensuel <= 0 || !annees || annees <= 0) return null
  const tauxMensuel = tauxAnnuel / 100 / 12
  const series = []
  let solde = 0
  let verse = 0
  for (let mois = 1; mois <= annees * 12; mois++) {
    solde = solde * (1 + tauxMensuel) + mensuel
    verse += mensuel
    if (mois % 12 === 0) {
      series.push({ annee: mois / 12, solde: Math.round(solde), verse: Math.round(verse) })
    }
  }
  return {
    series,
    verse: Math.round(verse),
    final: Math.round(solde),
    interets: Math.round(solde - verse),
  }
}

// ---------- Objectif de projet ----------

// « Il me faut X € dans N mois » → effort mensuel, et lecture honnête de la
// faisabilité par rapport à la capacité d'épargne.
export function computeGoal(montant, mois, capaciteMensuelle = null) {
  if (!montant || montant <= 0 || !mois || mois <= 0) return null
  const mensualite = Math.ceil(montant / mois)
  let verdict = null
  if (capaciteMensuelle != null && capaciteMensuelle > 0) {
    if (mensualite <= capaciteMensuelle * 0.8) verdict = 'confortable'
    else if (mensualite <= capaciteMensuelle) verdict = 'juste'
    else verdict = 'hors_portee'
  }
  // Si c'est hors de portée, on calcule le délai réaliste plutôt que de laisser
  // l'utilisateur sur un échec.
  const moisRealiste =
    verdict === 'hors_portee' ? Math.ceil(montant / capaciteMensuelle) : null
  return { mensualite, verdict, moisRealiste }
}

// ---------- Crédit conso (module 3) — simulateur premium ----------

// Mensualité et coût total réel d'un crédit : la formule d'annuité classique,
// exactement ce que le module 3.1 enseigne (mensualité × mois − capital).
export function computeCredit(montant, taegAnnuel, mois) {
  if (!montant || montant <= 0 || !mois || mois <= 0) return null
  const t = (taegAnnuel ?? 0) / 100 / 12
  const mensualite = t > 0 ? (montant * t) / (1 - Math.pow(1 + t, -mois)) : montant / mois
  const total = mensualite * mois
  return {
    mensualite: Math.round(mensualite),
    total: Math.round(total),
    cout: Math.round(total - montant),
    coutPct: Math.round(((total - montant) / montant) * 100),
  }
}

// ---------- Capacité d'emprunt immobilier (module 7) — simulateur premium ----------

// Règle des ~35 % d'endettement (assurance comprise) enseignée en 7.2 :
// mensualité max → capital empruntable (annuité inversée), + rappel des frais.
export function computeCapacite(revenuNet, chargesCredits, tauxAnnuel, annees) {
  if (!revenuNet || revenuNet <= 0 || !annees || annees <= 0) return null
  const mensualiteMax = Math.max(0, revenuNet * 0.35 - (chargesCredits || 0))
  if (mensualiteMax <= 0) {
    return { mensualiteMax: 0, capital: 0, tauxEndettement: 35, sature: true }
  }
  const t = (tauxAnnuel ?? 0) / 100 / 12
  const n = annees * 12
  const capital = t > 0 ? (mensualiteMax * (1 - Math.pow(1 + t, -n))) / t : mensualiteMax * n
  return {
    mensualiteMax: Math.round(mensualiteMax),
    capital: Math.round(capital),
    fraisNotaire: Math.round(capital * 0.08), // ordre de grandeur ancien (~7-8 %)
    sature: false,
  }
}

// ---------- Abondement (module épargne salariale) — simulateur premium ----------

// Versement + règle d'abondement (taux %, plafond €) → complément employeur,
// total placé, et versement optimal qui capte tout l'abondement (module 4.3).
export function computeAbondement(versement, tauxPct, plafond) {
  if (!versement || versement <= 0 || !tauxPct || tauxPct <= 0) return null
  const cap = plafond && plafond > 0 ? plafond : Infinity
  const abonde = Math.min((versement * tauxPct) / 100, cap)
  const versementOptimal = cap !== Infinity ? Math.ceil((cap * 100) / tauxPct) : null
  return {
    abonde: Math.round(abonde),
    total: Math.round(versement + abonde),
    gainPct: Math.round((abonde / versement) * 100),
    plafondAtteint: abonde >= cap - 0.5,
    versementOptimal,
  }
}

// ---------- Format ----------

export function euros(n) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(n)
}
