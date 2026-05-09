# SKY SS — Site web officiel

Site web officiel de **SKY SS**, entreprise de services informatiques basée à Nouakchott (Mauritanie).

> Votre partenaire de connectivité et transformation digitale en Mauritanie.

## 🛠️ Stack technique

- **Framework** : [Angular 20](https://angular.dev) (Server-Side Rendering activé)
- **Langage** : TypeScript 5.9
- **Email** : EmailJS (formulaires de contact / devis)
- **Server** : Express (mode SSR Angular)
- **Déploiement** : voir [DEPLOYMENT.md](DEPLOYMENT.md)

## 📂 Structure du projet

```
src/
├── app/
│   ├── components/
│   │   ├── hero/          # Section d'accueil + slogan
│   │   ├── services/      # 5 catégories de services
│   │   ├── case-studies/  # Domaines d'expertise
│   │   ├── about/         # À propos / mission / valeurs
│   │   ├── contact/       # Formulaire contact + devis
│   │   ├── header/        # Navigation principale
│   │   ├── footer/        # Pied de page
│   │   ├── home/          # Page d'accueil (assemblage)
│   │   ├── legal/         # Mentions légales (privacy + terms)
│   │   └── not-found/     # Page 404
│   ├── app.html           # Layout global + WhatsApp flottant
│   ├── app.routes.ts      # Routes Angular
│   └── app.ts             # Composant racine
├── environments/          # Variables prod / dev
├── styles.css             # Design system + variables CSS
└── index.html             # Meta SEO + JSON-LD

public/
├── icons/                 # Icônes des services
├── favicon.ico
├── robots.txt
└── sitemap.xml
```

## 🚀 Démarrage local

```bash
# Installation des dépendances
npm install

# Lancer le serveur de développement
npm start
# → http://localhost:4200/
```

Le rechargement automatique est activé sur tous les fichiers source.

## 🏗️ Build de production

```bash
npm run build
```

Les fichiers générés sont placés dans `dist/skyss-website/`.

Pour servir le build SSR :

```bash
npm run serve:ssr:skyss-website
```

## 🧪 Tests

```bash
npm test
```

## 📋 Fonctionnalités principales

- Hero animé avec slogan typé dynamiquement
- Présentation des 5 catégories de services
  - Infrastructure & Réseau
  - Développement Logiciel
  - Intelligence Artificielle & Innovation
  - Cybersécurité & Cloud
  - Solutions Professionnelles
- Domaines d'expertise (projets, applications, réseaux, IA)
- Section À propos (mission, vision, valeurs)
- Formulaire de contact avec **toggle Message / Demande de devis**
- Bouton WhatsApp flottant (`+222 36015158`)
- Pages légales (Confidentialité + CGU)
- SSR activé (SEO optimisé, prerendering)
- Responsive mobile / tablette / desktop

## 📞 Contact SKY SS

- **Adresse** : Nouakchott, Mauritanie
- **Téléphone / WhatsApp** : +222 36 01 51 58
- **Email** : contact@skyss.mr

## 📄 Cahier des charges

Voir [cahier_de_charge.md](cahier_de_charge.md) pour la liste complète des besoins fonctionnels.
