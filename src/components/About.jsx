import { useRef } from 'react'
import { BRAND } from '../brand.js'

// Page « À propos, données & mentions légales ».
// Trois blocs distincts :
// - Confidentialité : DÉFINITIF et exact (l'app ne collecte rien, tout est
//   local). C'est aussi l'argument clé du positionnement B2B.
// - Tes données : export / import / réinitialisation (déplacés depuis
//   l'accueil pour alléger ce dernier).
// - Mentions légales : l'identité de l'éditeur dépend de la structure qui
//   exploitera l'app — laissée en champs À COMPLÉTER, à ne pas inventer.
export default function About({ onBack, onExport, onImport, onRestart }) {
  const fileRef = useRef(null)
  return (
    <div className="about">
      <div className="module-header">
        <button className="back-link" onClick={onBack}>← Retour</button>
        <span className="module-header-title">ℹ️ À propos & mentions légales</span>
      </div>

      <section className="about-block">
        <h3>{BRAND.name} en deux mots</h3>
        <p>
          {BRAND.name} est une application d’<b>éducation financière</b> gratuite et
          sans publicité. De la lecture d’une fiche de paie aux premiers
          placements, elle explique l’argent du quotidien sans jargon, à travers
          des leçons courtes, des quiz, des simulateurs et un coach.
        </p>
        <p className="about-tagline">« {BRAND.tagline} »</p>
      </section>

      <section className="about-block about-privacy">
        <h3>🔒 Tes données restent chez toi</h3>
        <ul className="about-list">
          <li><b>Aucun compte</b> : pas d’inscription, pas d’e-mail, pas de mot de passe.</li>
          <li><b>Aucune collecte</b> : ta progression est stockée uniquement dans ton
            navigateur (localStorage), sur ton appareil. Elle n’est envoyée à aucun serveur.</li>
          <li><b>Aucun traceur, aucune publicité</b> : pas de cookie publicitaire, pas de
            mesure d’audience tierce, rien à revendre.</li>
          <li><b>Tu gardes la main</b> : tu peux exporter ou effacer ta progression à tout
            moment depuis l’accueil.</li>
        </ul>
        <p className="about-note">
          Comme rien ne quitte ton appareil, effacer les données du site ou changer de
          navigateur efface aussi ta progression : pense à l’exporter avant.
        </p>
      </section>

      <section className="about-block">
        <h3>💾 Tes données</h3>
        <p>
          Exporte ta progression (fichier JSON) pour la sauvegarder ou la transférer sur
          un autre appareil, réimporte-la, ou repars de zéro.
        </p>
        <div className="about-data-actions">
          <button className="btn btn-secondary" onClick={onExport}>
            ⬇️ Exporter ma progression
          </button>
          <button className="btn btn-secondary" onClick={() => fileRef.current?.click()}>
            ⬆️ Importer une progression
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json"
            hidden
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) onImport(file)
              e.target.value = ''
            }}
          />
          <button className="btn btn-ghost about-reset" onClick={onRestart}>
            Tout réinitialiser
          </button>
        </div>
      </section>

      <section className="about-block about-disclaimer-block">
        <h3>⚖️ Un outil éducatif, pas un conseiller</h3>
        <p>
          {BRAND.name} a une vocation strictement pédagogique. Les contenus et les
          « plans d’action » proposent des démarches d’information, de vérification et
          d’organisation. Ils ne constituent <b>jamais</b> un conseil en investissement,
          une recommandation d’achat, ni une préconisation d’un produit ou d’un
          établissement particulier. Pour une décision engageant ton argent, rapproche-toi
          d’un professionnel habilité.
        </p>
      </section>

      <section className="about-block">
        <h3>Mentions légales</h3>
        <p className="about-legal-todo">
          Les informations ci-dessous sont à compléter par la structure qui édite et
          exploite l’application :
        </p>
        <dl className="about-legal">
          <dt>Éditeur</dt>
          <dd>[Raison sociale, forme juridique, capital]</dd>
          <dt>Siège social</dt>
          <dd>[Adresse]</dd>
          <dt>Immatriculation</dt>
          <dd>[SIREN / SIRET · RCS]</dd>
          <dt>Directeur / directrice de la publication</dt>
          <dd>[Nom]</dd>
          <dt>Contact</dt>
          <dd>[Adresse e-mail de contact]</dd>
          <dt>Hébergement</dt>
          <dd>GitHub Pages — GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA</dd>
        </dl>
      </section>

      <section className="about-block">
        <h3>Licence & sources</h3>
        <p>
          Les informations réglementaires (fiscalité, plafonds, dispositifs) sont issues
          de sources publiques (service-public.fr, AMF, Banque de France) et sont données
          à titre indicatif ; elles peuvent évoluer. En cas de doute, la source officielle
          fait foi.
        </p>
        <p className="about-version">{BRAND.name} · version 0.1 · {BRAND.mascot}, ton coach</p>
      </section>
    </div>
  )
}
