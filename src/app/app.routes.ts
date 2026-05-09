import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { PrivacyPolicyComponent } from './components/legal/privacy-policy/privacy-policy';
import { TermsComponent } from './components/legal/terms/terms';
import { NotFoundComponent } from './components/not-found/not-found';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'terms', component: TermsComponent },
    { path: '**', component: NotFoundComponent }
];
