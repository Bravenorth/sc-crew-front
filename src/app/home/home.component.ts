import { Component } from '@angular/core';
import { MembersComponent } from '../members/members.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MembersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
