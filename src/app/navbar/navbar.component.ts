import { Component, ElementRef, ViewContainerRef, importProvidersFrom } from '@angular/core';
import { MembersService } from '../services/members.service';
import { RouterModule } from '@angular/router';
import { InscriptionComponent } from '../inscription/inscription.component';
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';
import { SigninSignupButtonComponent } from '../signin-signup-button/signin-signup-button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, SigninSignupButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(public membersService: MembersService) {}
}