import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ExpertiseDomain {
  title: string;
  description: string;
  iconImg: string;
  count: string;
  highlights: string[];
}

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './case-studies.html',
  styleUrls: ['./case-studies.css']
})
export class CaseStudiesComponent {
  domains: ExpertiseDomain[] = [
    {
      title: 'Projets réalisés',
      description: "Conception et déploiement de projets IT clé en main pour entreprises et administrations en Mauritanie.",
      iconImg: '/icons/rocket.png',
      count: '50+',
      highlights: [
        'Cahier des charges & architecture',
        'Développement & déploiement',
        'Formation & accompagnement'
      ]
    },
    {
      title: 'Applications développées',
      description: "Applications web et mobiles sur mesure : ERP, CRM, portails clients, applications métiers et plateformes SaaS.",
      iconImg: '/icons/code.png',
      count: '30+',
      highlights: [
        'Web (Angular, React)',
        'Mobile (iOS & Android)',
        'API & intégrations'
      ]
    },
    {
      title: 'Réseaux installés',
      description: "Infrastructures réseau d'entreprise : LAN/WAN, WiFi professionnel, VPN, sécurité périmétrique et supervision.",
      iconImg: '/icons/Networking_and_Infrastructure_Icon.png',
      count: '25+',
      highlights: [
        'Architecture & câblage',
        'WiFi entreprise',
        'Sécurité & VPN'
      ]
    },
    {
      title: 'Solutions IA déployées',
      description: "Mise en œuvre de solutions d'intelligence artificielle : chatbots, automatisation, analyse de données et ML.",
      iconImg: '/icons/Innovation_Icon.png',
      count: '10+',
      highlights: [
        'Chatbots intelligents',
        'Automatisation des processus',
        'Modèles ML & analyse de données'
      ]
    }
  ];
}
