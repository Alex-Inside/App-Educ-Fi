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

// ---------- Format ----------

export function euros(n) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(n)
}
