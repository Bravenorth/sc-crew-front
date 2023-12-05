import { Component, ComponentRef } from '@angular/core';
import { MembersService } from '../services/members.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalManager } from '../app.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  username: string = "";
  email: string = "";
  password: string = "";
  passcheck: string = "";
  rulesAccepted: string = "";
  cookiesAccepted: string = "";
  err: string = "";

  constructor(public membersService: MembersService) {
    
  }

  signup(): void {
    if (this.passcheck !== this.password) {
      this.err = "Les mots de passe ne correspondent pas.";
      return;
    }
    if (!this.rulesAccepted) {
      this.err = "Vous devez lire et accepter le réglement pour vous inscrire.";
      return;
    }
    if (!this.cookiesAccepted) {
      this.err = "Vous devez accepter l'utilisation des cookies nécessaire au fonctionnement du site.";
      return;
    }
    this.membersService.signup(this.username, this.email, this.password).subscribe({
      next: (data) => {
        this.username = "";
        this.email = "";
        ModalManager.closeModals();
        //this.alertService.set("success", "Votre compte a été créé !", 3000);
        //this.signin();
      },
      error: (err) => {
        if (err.error.message === "Missing credentials") err.error.message = "Veuillez remplir le formulaire.";
        this.err = err.error.message;
      }
    });
    this.password = '';
    this.passcheck = '';
  }
}
