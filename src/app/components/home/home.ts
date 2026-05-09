import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero';
import { ServicesComponent } from '../services/services';
import { CaseStudiesComponent } from '../case-studies/case-studies';
import { AboutComponent } from '../about/about';
import { ContactComponent } from '../contact/contact';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        HeroComponent,
        ServicesComponent,
        CaseStudiesComponent,
        AboutComponent,
        ContactComponent
    ],
    templateUrl: './home.html',
    styleUrl: './home.css'
})
export class HomeComponent { }
