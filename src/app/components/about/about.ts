import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent {
  values = [
    {
      iconImg: '/icons/Innovation_Icon.png',
      title: 'Innovation',
      description: "Nous adoptons les technologies les plus avancées (IA, cloud, automatisation) pour offrir à nos clients une longueur d'avance."
    },
    {
      iconImg: '/icons/Reliability_Icon.png',
      title: 'Fiabilité',
      description: "Nous tenons nos engagements : délais respectés, livrables conformes et un support disponible quand vous en avez besoin."
    },
    {
      iconImg: '/icons/Excellence_Icon.png',
      title: 'Excellence',
      description: "Nous visons la qualité à chaque étape : code soigné, sécurité éprouvée, et solutions pensées pour durer."
    },
    {
      iconImg: '/icons/Security_Icon.png',
      title: 'Sécurité',
      description: "La protection de vos données et de vos infrastructures est au cœur de chacune de nos prestations — chiffrement, audits, monitoring."
    },
    {
      iconImg: '/icons/Collaboration_Icon.png',
      title: 'Accompagnement',
      description: "Nous travaillons main dans la main avec nos clients : écoute du besoin, conseil personnalisé et formation des équipes."
    },
    {
      iconImg: '/icons/Integrity_Icon.png',
      title: 'Intégrité',
      description: "Transparence totale sur les choix techniques, les coûts et les délais. Pas de mauvaises surprises, pas de promesses creuses."
    }
  ];
}
