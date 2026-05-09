import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class ServicesComponent {
  services = [
    {
      iconImg: '/icons/Networking_and_Infrastructure_Icon.png',
      title: 'Infrastructure & Réseau',
      description: "Conception, installation et maintenance de l'infrastructure IT de votre entreprise : réseaux LAN/WAN, WiFi, serveurs, sécurité périmétrique et accès distant sécurisés.",
      features: [
        'Installation réseau & WiFi entreprise',
        'VPN professionnel & accès distants',
        'Sécurité réseau & pare-feu',
        'Administration système'
      ],
      link: '#contact'
    },
    {
      iconImg: '/icons/Software_Developement_Icon.png',
      title: 'Développement Logiciel',
      description: "Développement sur mesure d'applications web, mobiles et plateformes métiers : ERP, CRM, portails clients et intégrations API adaptés à vos processus.",
      features: [
        'Applications web & mobile (iOS/Android)',
        'Plateformes SaaS, ERP & CRM',
        'Portails clients & applications métiers',
        'API & intégration de services'
      ],
      link: '#contact'
    },
    {
      iconImg: '/icons/Innovation_Icon.png',
      title: 'Intelligence Artificielle & Innovation',
      description: "Tirez parti de l'IA pour automatiser, analyser et optimiser : chatbots, traitement de données, modèles prédictifs et automatisation intelligente des processus métier.",
      features: [
        'Solutions IA pour entreprises',
        'Chatbots intelligents',
        'Automatisation des processus (RPA)',
        'Analyse de données & Machine Learning'
      ],
      link: '#contact'
    },
    {
      iconImg: '/icons/Security_Icon.png',
      title: 'Cybersécurité & Cloud',
      description: "Protégez vos données et vos systèmes : audits de sécurité, hébergement cloud, sauvegarde, supervision 24/7 et maintenance proactive de vos infrastructures.",
      features: [
        'Cybersécurité & sécurité des infrastructures',
        'Hébergement cloud & sauvegarde',
        'Monitoring réseau & supervision',
        'Maintenance informatique'
      ],
      link: '#contact'
    },
    {
      iconImg: '/icons/IT_Consulting_and_Maintenance_Icon.png',
      title: 'Solutions Professionnelles',
      description: "Solutions clés en main pour entreprises et administrations : digitalisation, Smart Office, ERP/CRM et accompagnement complet de votre transformation digitale.",
      features: [
        'Solutions entreprises & administrations',
        'Smart Office & digitalisation',
        'ERP & CRM',
        'Transformation digitale'
      ],
      link: '#contact'
    }
  ];
}
