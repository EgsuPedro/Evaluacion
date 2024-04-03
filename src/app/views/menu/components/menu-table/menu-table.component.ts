import { Component, Input } from '@angular/core';
import { Menu } from '@interfaces/menu/menu';

@Component({
  selector: 'menu-table',
  standalone: true,
  imports: [],
  templateUrl: './menu-table.component.html',
  styleUrl: './menu-table.component.scss'
})
export class MenuTableComponent {
  @Input({ required: true }) menu!: Menu[];
}



