import { Component } from '@angular/core';
import { MembersService } from '../services/members.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

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

  constructor(public membersService: MembersService, private router: Router) {
    
  }

  signup(): void {
    this.membersService.signup(this.username, this.password);
  }

  signin(): void {
    this.router.navigate(['/', 'signin']);
  }
}
