# EmailJS - Configuration du Template pour Proger Technology

## Étape 1: Créer un nouveau template

1. Allez sur: https://dashboard.emailjs.com/admin/templates
2. Cliquez sur **"Create New Template"**

## Étape 2: Configuration - Onglet "Settings"

Remplissez les champs suivants:

```
Template Name: Proger Tech Contact Form

Subject: New Contact Form - {{subject}}

To Email: abdellahiahmedahmedbaba@gmail.com

From Name: {{from_name}}

From Email: (laissez vide - utilisera l'email par défaut EmailJS)

Reply To: {{from_email}}

Bcc Email: (laissez vide)
```

## Étape 3: Configuration - Onglet "Content"

Copiez-collez ce contenu HTML dans l'éditeur:

```html
<div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; background: #f5f5f5; padding: 20px;">

  <!-- Header -->
  <div style="background: linear-gradient(135deg, #2563eb 0%, #14b8a6 100%); padding: 40px 20px; text-align: center; border-radius: 12px 12px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 700;">
      Nouveau Message<br>
      <span style="font-size: 28px;">Proger Technology</span>
    </h1>
  </div>

  <!-- Body -->
  <div style="background: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">

    <p style="color: #64748b; font-size: 14px; margin: 0 0 20px 0;">
      Un nouveau message a été reçu depuis le formulaire de contact du site web.
    </p>

    <!-- Contact Info Card -->
    <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #2563eb;">

      <div style="margin-bottom: 15px;">
        <strong style="color: #1e293b; display: block; margin-bottom: 5px;">👤 Nom:</strong>
        <span style="color: #334155;">{{from_name}}</span>
      </div>

      <div style="margin-bottom: 15px;">
        <strong style="color: #1e293b; display: block; margin-bottom: 5px;">✉️ Email:</strong>
        <a href="mailto:{{from_email}}" style="color: #2563eb; text-decoration: none;">{{from_email}}</a>
      </div>

      <div>
        <strong style="color: #1e293b; display: block; margin-bottom: 5px;">📋 Sujet:</strong>
        <span style="color: #334155;">{{subject}}</span>
      </div>

    </div>

    <!-- Message Card -->
    <div style="background: #f1f5f9; padding: 20px; border-radius: 8px;">
      <strong style="color: #1e293b; display: block; margin-bottom: 10px;">💬 Message:</strong>
      <p style="color: #334155; line-height: 1.6; margin: 0; white-space: pre-wrap;">{{message}}</p>
    </div>

    <!-- Action Button -->
    <div style="text-align: center; margin-top: 30px;">
      <a href="mailto:{{from_email}}" style="background: linear-gradient(135deg, #2563eb 0%, #14b8a6 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: 600;">
        Répondre au client
      </a>
    </div>

  </div>

  <!-- Footer -->
  <div style="text-align: center; padding: 20px; color: #64748b; font-size: 12px;">
    <p style="margin: 0;">Envoyé depuis le site web Proger Technology</p>
    <p style="margin: 5px 0 0 0;">© 2025 Proger Technology - Professional Technology Solutions</p>
  </div>

</div>
```

## Étape 4: Test Settings (optionnel)

Dans l'onglet "Test Settings", vous pouvez tester avec ces valeurs:

```
from_name: Jean Dupont
from_email: jean.dupont@example.com
subject: Demande de devis pour un site web
message: Bonjour, je souhaiterais obtenir un devis pour la création d'un site web e-commerce. Merci de me recontacter.
```

Cliquez sur **"Test It"** pour tester.

## Étape 5: Sauvegarder et copier l'ID

1. Cliquez sur **"Save"**
2. En haut de la page, vous verrez le **Template ID** (ex: `template_abc1234`)
3. **COPIEZ CET ID** - vous en aurez besoin pour mettre à jour le code

## Étape 6: Vérifier les variables

Assurez-vous que ces variables sont bien présentes dans votre template:
- `{{from_name}}` - Nom de l'expéditeur
- `{{from_email}}` - Email de l'expéditeur
- `{{subject}}` - Sujet du message
- `{{message}}` - Contenu du message

## Après la création

Une fois le template créé, donnez-moi le nouveau **Template ID** et je mettrai à jour le fichier `contact.ts` pour utiliser ce nouveau template.
