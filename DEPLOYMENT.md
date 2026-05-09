# Proger Technology - Guide de Déploiement

## 📋 Prérequis

- Node.js (v18+)
- npm ou yarn
- Serveur avec support Node.js ou Apache/Nginx
- Certificat SSL pour HTTPS

## 🔒 Sécurité Implémentée

### Headers de Sécurité (server.ts)
- ✅ `X-Frame-Options: DENY` - Protection contre le clickjacking
- ✅ `X-Content-Type-Options: nosniff` - Prévention du MIME sniffing
- ✅ `X-XSS-Protection: 1; mode=block` - Protection XSS
- ✅ `Strict-Transport-Security` - Force HTTPS (HSTS)
- ✅ `Referrer-Policy` - Contrôle des informations de référence
- ✅ `Permissions-Policy` - Restriction des APIs du navigateur

### Content Security Policy (CSP)
Implémenté dans `index.html` pour:
- Bloquer les scripts inline non autorisés
- Contrôler les sources d'images
- Restreindre les frames (clickjacking)
- Sécuriser les formulaires

### Meta Tags SEO
- ✅ Description et mots-clés optimisés
- ✅ Open Graph (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Mobile optimization
- ✅ robots.txt et sitemap.xml

## 🚀 Étapes de Déploiement

### 1. Build de Production

```bash
# Installation des dépendances
npm install

# Build optimisé pour production
npm run build

# Les fichiers seront dans dist/progre-tech/
```

### 2. Configuration de l'Environnement

Le fichier `src/environments/environment.prod.ts` est automatiquement utilisé en production:

```typescript
export const environment = {
  production: true,
  apiUrl: 'https://proger-tech.com/api',
  enableDebug: false,
  enableAnalytics: true
};
```

**Important:** Remplacer `https://proger-tech.com` par votre domaine réel.

### 3. Déploiement sur Serveur Node.js

```bash
# Démarrer le serveur SSR
npm run serve:ssr:progre-tech

# Ou avec PM2 (recommandé pour production)
pm2 start dist/progre-tech/server/server.mjs --name proger-tech

# Configurer PM2 au démarrage
pm2 startup
pm2 save
```

### 4. Configuration Nginx (Reverse Proxy)

Si vous utilisez Nginx comme reverse proxy:

```nginx
server {
    listen 80;
    server_name proger-tech.com www.proger-tech.com;

    # Redirection HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name proger-tech.com www.proger-tech.com;

    # Certificats SSL
    ssl_certificate /path/to/ssl/cert.pem;
    ssl_certificate_key /path/to/ssl/key.pem;

    # Configuration SSL sécurisée
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    # Headers de sécurité
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;

    # Proxy vers Node.js
    location / {
        proxy_pass http://localhost:4000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/json application/xml+rss;
}
```

### 5. Déploiement sur Apache

Si vous déployez sur Apache, le fichier `.htaccess` est déjà configuré avec:
- Redirection HTTPS forcée
- Headers de sécurité
- Compression Gzip
- Cache navigateur optimisé

### 6. Variables d'Environnement

Créer un fichier `.env` à la racine:

```env
PORT=4000
NODE_ENV=production
```

## 🎯 Optimisations Incluses

### Build Production (angular.json)
- ✅ Minification JS/CSS
- ✅ Tree shaking
- ✅ AOT compilation
- ✅ Build optimizer
- ✅ Critical CSS inlining
- ✅ Output hashing (cache busting)
- ✅ License extraction
- ✅ Source maps désactivées

### Images et Assets
- Toutes les images dans `/public`
- Cache 1 an configuré
- Compression recommandée (WebP si possible)

## 📊 Monitoring et Maintenance

### Commandes Utiles

```bash
# Vérifier le status (PM2)
pm2 status

# Logs en temps réel
pm2 logs proger-tech

# Redémarrer l'application
pm2 restart proger-tech

# Arrêter l'application
pm2 stop proger-tech
```

### Performance

- Activer la compression Gzip/Brotli
- Utiliser un CDN pour les assets statiques
- Monitorer avec Google Analytics (déjà configuré)
- Tester avec Google PageSpeed Insights

## 🔍 Tests Avant Déploiement

```bash
# Build de production local
npm run build

# Tester le build SSR
npm run serve:ssr:progre-tech

# Ouvrir http://localhost:4000 et vérifier:
# - Toutes les images chargent
# - Pas d'erreurs console
# - Animations fonctionnent
# - Formulaire de contact fonctionne
# - SEO meta tags présents (View Source)
```

## 🛡️ Checklist Sécurité Finale

- [ ] HTTPS activé et certificat valide
- [ ] Headers de sécurité présents (tester avec securityheaders.com)
- [ ] CSP configuré sans erreurs console
- [ ] Fichiers sensibles non accessibles (.env, etc.)
- [ ] robots.txt et sitemap.xml accessibles
- [ ] HSTS activé (6-12 mois minimum)
- [ ] Backup réguliers configurés
- [ ] Monitoring des erreurs activé

## 📱 SEO Checklist

- [ ] Meta description unique et descriptive
- [ ] Open Graph tags configurés
- [ ] Twitter Cards configurés
- [ ] Sitemap.xml soumis à Google Search Console
- [ ] robots.txt vérifié
- [ ] URLs canoniques définies
- [ ] Mobile-friendly test passed
- [ ] PageSpeed score > 90

## 🚨 Troubleshooting

### Problème: Headers de sécurité non appliqués
- Vérifier que le middleware dans `server.ts` est bien exécuté
- Pour Apache: vérifier que `mod_headers` est activé

### Problème: Images ne chargent pas
- Vérifier le chemin dans `environment.prod.ts`
- Vérifier les permissions des fichiers
- Vérifier la CSP pour `img-src`

### Problème: CSS/JS non chargés
- Vider le cache navigateur
- Vérifier la CSP pour `style-src` et `script-src`
- Vérifier que le build s'est terminé sans erreurs

## 📞 Support

Pour toute question sur le déploiement:
- Email: support@proger-tech.com
- Documentation Angular SSR: https://angular.dev/guide/ssr

---

**Version:** 1.0.0
**Dernière mise à jour:** 28 Novembre 2025
**Équipe:** Proger Technology
