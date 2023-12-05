import { Component } from '@angular/core';
import { MembersService } from '../services/members.service';
import { RouterModule } from '@angular/router';
import { InscriptionComponent } from '../inscription/inscription.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(public membersService: MembersService) {}
}
