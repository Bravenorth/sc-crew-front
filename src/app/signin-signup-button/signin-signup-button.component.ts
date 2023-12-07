import { Component, ElementRef } from '@angular/core';
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';
import { ModalManager } from '../app.component';

@Component({
  selector: 'app-signin-signup-button',
  standalone: true,
  imports: [SigninComponent, SignupComponent],
  templateUrl: './signin-signup-button.component.html',
  styleUrl: './signin-signup-button.component.scss'
})
export class SigninSignupButtonComponent {

  constructor() {}

  openModal(modal: HTMLDialogElement): void {
    ModalManager.openModal(modal);
  }

  closeModals() {
    ModalManager.closeModals();
  }
}
