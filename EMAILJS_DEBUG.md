# EmailJS Debug Guide

## Problème: "Failed to send message"

### Vérifications à faire sur EmailJS Dashboard:

#### 1. Vérifier le Service Email
- Allez sur https://dashboard.emailjs.com/admin
- Cliquez sur "Email Services"
- Vérifiez que le service `service_0opy4c7` est bien **connecté**
- Si déconnecté, reconnectez votre Gmail

#### 2. Vérifier le Template
- Allez sur "Email Templates"
- Cliquez sur le template `template_t1vb2jp`
- Vérifiez que les variables utilisées correspondent exactement:

**Variables dans le code:**
```javascript
{
  from_name: this.formData.name,
  from_email: this.formData.email,
  subject: this.formData.subject,
  message: this.formData.message
}
```

**Variables dans le template EmailJS (doivent être EXACTEMENT):**
- `{{from_name}}` - Nom de l'expéditeur
- `{{from_email}}` - Email de l'expéditeur
- `{{subject}}` - Sujet du message
- `{{message}}` - Contenu du message

#### 3. Vérifier les Settings du Template

Dans l'onglet "Settings" du template:

**To Email:** `abdellahiahmedahmedbaba@gmail.com`
**From Name:** `{{from_name}}` (ou fixe: "Proger Tech Website")
**From Email:** Utilisez l'email EmailJS par défaut
**Reply To:** `{{from_email}}` (IMPORTANT pour pouvoir répondre au client)

#### 4. Tester le Template

1. Dans EmailJS, cliquez sur "Test It" (icône play)
2. Remplissez les champs de test:
   - `from_name`: "Test User"
   - `from_email`: "test@example.com"
   - `subject`: "Test Subject"
   - `message`: "This is a test message"
3. Cliquez sur "Send Test Email"
4. Vérifiez votre boîte mail `abdellahiahmedahmedbaba@gmail.com`

#### 5. Vérifier le Quota

- Dans le dashboard EmailJS, vérifiez:
  - **Requests left:** Doit être > 0 (limite: 200/mois en gratuit)
  - Si limite atteinte, attendez le mois prochain ou upgrader

#### 6. Vérifier les Erreurs dans la Console du Navigateur

Ouvrez la console du navigateur (F12) et regardez les erreurs exactes quand vous soumettez le formulaire.

**Erreurs communes:**

1. **"Service is not available"**
   - Solution: Reconnectez votre service Gmail dans EmailJS

2. **"Template is not available"**
   - Solution: Vérifiez l'ID du template

3. **"Invalid public key"**
   - Solution: Vérifiez la Public Key dans Account > General

4. **"The user ID is invalid"**
   - Solution: Vérifiez la Public Key (commence par un underscore)

5. **"Can't send email"**
   - Solution: Vérifiez les paramètres du service email

#### 7. Variables du Template - Format Recommandé

**Content HTML du template:**

```html
<div style="font-family: system-ui, -apple-system, sans-serif, Arial; font-size: 14px; margin: 0; padding: 0; background-color: #f1f5f9;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">

    <!-- Header -->
    <div style="background: linear-gradient(135deg, #2563eb 0%, #14b8a6 100%); padding: 24px 16px; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 20px; font-weight: 700; line-height: 1.3;">
        Nouveau Message<br>Proger Technology
      </h1>
    </div>

    <!-- Main Content -->
    <div style="padding: 20px 16px; background: #f8fafc;">
      <div style="background: white; padding: 16px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">

        <p style="margin: 0 0 16px 0; color: #64748b; font-size: 13px; line-height: 1.5;">
          Un nouveau message a été reçu depuis le formulaire de contact du site web.
        </p>

        <!-- Message Card -->
        <div style="margin-top: 16px; padding: 16px; background: #f1f5f9; border-left: 3px solid #2563eb; border-radius: 6px;">

          <!-- Avatar & Name -->
          <div style="margin-bottom: 16px;">
            <div style="color: #1e293b; font-size: 16px; font-weight: 700; margin-bottom: 4px;">
              {{from_name}}
            </div>
            <div style="color: #2563eb; font-size: 12px; margin-bottom: 6px;">
              ✉️ {{from_email}}
            </div>
          </div>

          <!-- Subject -->
          <div style="background: white; padding: 10px 12px; border-radius: 4px; margin-bottom: 16px;">
            <div style="color: #64748b; font-size: 11px; font-weight: 600; text-transform: uppercase; margin-bottom: 4px;">
              SUJET
            </div>
            <div style="color: #334155; font-size: 14px; font-weight: 600;">
              {{subject}}
            </div>
          </div>

          <!-- Message -->
          <div style="padding-top: 16px; border-top: 1px dashed #cbd5e1;">
            <div style="color: #64748b; font-size: 11px; font-weight: 600; text-transform: uppercase; margin-bottom: 8px;">
              MESSAGE
            </div>
            <div style="font-size: 14px; line-height: 1.6; color: #334155;">{{message}}</div>
          </div>

        </div>
      </div>
    </div>

    <!-- Footer -->
    <div style="background: #1e293b; padding: 20px 16px; text-align: center;">
      <p style="color: #94a3b8; font-size: 11px; margin: 0;">
        Envoyé depuis le site web Proger Technology
      </p>
    </div>

  </div>
</div>
```

#### 8. Tester depuis le site

1. Rebuild: `npm run build`
2. Start: `npm start`
3. Allez sur http://localhost:4200/#contact
4. Remplissez le formulaire
5. Regardez la console du navigateur pour les erreurs détaillées

## Solution Rapide

Si tout est correct dans EmailJS mais ça ne marche toujours pas:

1. **Supprimez** le template actuel dans EmailJS
2. **Créez un NOUVEAU template** avec un nom différent
3. **Notez le nouveau Template ID**
4. **Mettez à jour** le fichier `contact.ts`:
   ```typescript
   templateId: 'NOUVEAU_TEMPLATE_ID'
   ```
5. Rebuild et test

## Contact EmailJS Support

Si le problème persiste, contactez le support EmailJS avec:
- Service ID: `service_0opy4c7`
- Template ID: `template_t1vb2jp`
- Public Key: `S_t0u2BbVj6zMecZE`
- Message d'erreur exact de la console
