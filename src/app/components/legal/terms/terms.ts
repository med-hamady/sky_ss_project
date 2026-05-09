import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-terms',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './terms.html',
    styleUrl: './terms.css'
})
export class TermsComponent {
    lastUpdated = '9 mai 2026';
}
