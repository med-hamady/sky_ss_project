# EmailJS - Guide de Correction Rapide

## Problème: "Failed to send message"

### ÉTAPE 1: Vérifier le Service EmailJS (CRITIQUE)

1. Allez sur: https://dashboard.emailjs.com/admin/account
2. Dans le menu de gauche, cliquez sur **"Email Services"**
3. Vérifiez que le service `service_0opy4c7` existe et est **CONNECTÉ** (voyez-vous un point vert?)
4. Si DÉCONNECTÉ ou inexistant:
   - Cliquez sur **"Add New Service"**
   - Choisissez **Gmail**
   - Connectez votre compte Gmail: `abdellahiahmedahmedbaba@gmail.com`
   - NOTEZ le nouveau Service ID (ressemblera à `service_xxxxxxx`)

### ÉTAPE 2: Vérifier le Template EmailJS

1. Allez sur: https://dashboard.emailjs.com/admin/templates
2. Vérifiez que le template `template_t1vb2jp` existe
3. Si NON, créez un nouveau template:
   - Cliquez sur **"Create New Template"**
   - NOTEZ le nouveau Template ID

### ÉTAPE 3: Configuration du Template

Ouvrez le template et configurez comme suit:

#### Settings Tab:
```
Subject: New Message from {{from_name}} - {{subject}}
From name: Proger Tech Website
Reply to: {{from_email}}
To email: abdellahiahmedahmedbaba@gmail.com
```

#### Content Tab (copier-coller):
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
  <div style="background: linear-gradient(135deg, #2563eb 0%, #14b8a6 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
    <h1 style="color: white; margin: 0;">Nouveau Message - RimTech</h1>
  </div>

  <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px;">
    <h2 style="color: #333; margin-top: 0;">Détails du message</h2>

    <p><strong>De:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
    <p><strong>Sujet:</strong> {{subject}}</p>

    <div style="margin-top: 20px; padding: 20px; background: #f9f9f9; border-left: 4px solid #2563eb;">
      <h3 style="margin-top: 0; color: #555;">Message:</h3>
      <p style="white-space: pre-wrap;">{{message}}</p>
    </div>
  </div>
</div>
```

#### Test Settings Tab:
```
from_name: Test User
from_email: test@example.com
subject: Test Subject
message: This is a test message from the website
```

Cliquez sur **"Save"** puis **"Test It"**

### ÉTAPE 4: Vérifier la Public Key

1. Allez sur: https://dashboard.emailjs.com/admin/account
2. Dans la section **"General"**, copiez votre **Public Key**
3. Elle devrait être: `S_t0u2BbVj6zMecZE`

### ÉTAPE 5: Mettre à jour le code SI NÉCESSAIRE

Si vous avez créé de nouveaux Service ID ou Template ID:

1. Ouvrez le fichier: `src/app/components/contact/contact.ts`
2. Ligne 26-30, mettez à jour:
```typescript
private emailjsConfig = {
  serviceId: 'VOTRE_NOUVEAU_SERVICE_ID',  // Si changé
  templateId: 'VOTRE_NOUVEAU_TEMPLATE_ID', // Si changé
  publicKey: 'S_t0u2BbVj6zMecZE'
};
```

### ÉTAPE 6: Tester depuis le site

1. Ouvrez http://localhost:4200/#contact
2. Ouvrez la **Console du navigateur** (F12 > Console)
3. Remplissez le formulaire
4. Cliquez sur "Send Message"
5. Regardez les messages dans la console

### Messages d'erreur communs:

**"Service is not available"**
→ Le service Gmail n'est pas connecté. Reconnectez-le (Étape 1)

**"The template ID is invalid"**
→ Le template n'existe pas. Créez-en un nouveau (Étape 2)

**"The user ID is invalid"** ou **"Invalid public key"**
→ Votre Public Key est incorrecte. Vérifiez-la (Étape 4)

**"Can't send email"**
→ Vérifiez les paramètres du template (Étape 3)

**Pas d'erreur mais pas d'email reçu?**
→ Vérifiez vos spams dans Gmail

### ÉTAPE 7: Vérifier le quota

Allez sur le dashboard EmailJS, en haut à droite vous verrez:
- **Requests left this month:** devrait être > 0

Si c'est 0, vous avez atteint la limite gratuite de 200 emails/mois.

### Si rien ne fonctionne

Créez un NOUVEAU compte EmailJS complètement:
1. Allez sur https://www.emailjs.com/
2. Créez un nouveau compte avec un autre email
3. Configurez service Gmail + template
4. Notez les nouveaux IDs
5. Mettez à jour le code
