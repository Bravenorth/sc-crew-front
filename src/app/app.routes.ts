import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    //{ path: 'signin', component: SigninComponent },
    //{ path: 'signup', component: SignupComponent },
    { path: 'ta-mere', component: InscriptionComponent }
];
