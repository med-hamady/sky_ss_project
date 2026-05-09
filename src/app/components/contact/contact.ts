import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent implements OnInit {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  /** Type de demande : 'contact' (message libre) ou 'devis' (demande de devis) */
  formType: 'contact' | 'devis' = 'contact';

  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  setFormType(type: 'contact' | 'devis') {
    this.formType = type;
    if (type === 'devis' && !this.formData.subject) {
      this.formData.subject = 'Demande de devis';
    }
  }

  // EmailJS Configuration
  private emailjsConfig = {
    serviceId: 'service_0opy4c7',
    templateId: 'template_t1vb2jq', // Correct Template ID
    publicKey: 'S_t0u2BbVj6zMecZE'
  };

  ngOnInit() {
    // Initialize EmailJS once when component loads
    try {
      emailjs.init(this.emailjsConfig.publicKey);
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('Failed to initialize EmailJS:', error);
    }
  }

  async onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;
    this.submitMessage = '';

    try {
      // Send email using EmailJS with template params
      const templateParams = {
        from_name: this.formData.name,
        from_email: this.formData.email,
        subject: this.formData.subject,
        message: this.formData.message
      };

      console.log('EmailJS Config:', {
        serviceId: this.emailjsConfig.serviceId,
        templateId: this.emailjsConfig.templateId,
        publicKey: this.emailjsConfig.publicKey
      });
      console.log('Sending email with params:', templateParams);

      const response = await emailjs.send(
        this.emailjsConfig.serviceId,
        this.emailjsConfig.templateId,
        templateParams
      );

      console.log('Email sent successfully!', response);
      this.submitSuccess = true;
      this.submitMessage = 'Merci pour votre message ! Nous vous recontactons rapidement.';

      // Reset form
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };

      // Clear success message after 10 seconds
      setTimeout(() => {
        this.submitMessage = '';
        this.submitSuccess = false;
      }, 10000);

    } catch (error: any) {
      console.error('Failed to send email:', error);
      this.submitSuccess = false;

      // More detailed error message
      let errorMsg = "L'envoi du message a échoué. ";
      if (error.text) {
        errorMsg += `Erreur : ${error.text}. `;
      } else if (error.message) {
        errorMsg += `Erreur : ${error.message}. `;
      }
      errorMsg += 'Merci de réessayer ou de nous écrire directement à contact@skyss.mr';

      this.submitMessage = errorMsg;

      // Clear error message after 8 seconds for longer error messages
      setTimeout(() => {
        this.submitMessage = '';
      }, 8000);
    } finally {
      this.isSubmitting = false;
    }
  }
}
