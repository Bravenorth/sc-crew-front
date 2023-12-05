import { Component, ComponentRef } from '@angular/core';
import { Member, MembersService } from '../services/members.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SigninSignupButtonComponent } from '../signin-signup-button/signin-signup-button.component';
import { ModalManager } from '../app.component';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  username: string = "";
  password: string = "";
  err: string = "";

  constructor(public membersService: MembersService) {
    
  }

  signin(): void {
    this.membersService.signin(this.username, this.password).subscribe({
      next: (data: any) => {
        this.membersService.userConnected(data);
        this.username = "";
        ModalManager.closeModals();
      },
      error: (err) => {
        if (err.error.message === "Missing credentials") err.error.message = "Veuillez remplir le formulaire.";
        this.err = err.error.message;
      }
    });
    this.password = '';
  }
}
