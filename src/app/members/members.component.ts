import { Component } from '@angular/core';
import { MembersService } from '../services/members.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss'
})
export class MembersComponent {

  constructor(public membersService: MembersService) {
  }

}
