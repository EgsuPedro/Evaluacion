import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'nabvar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nabvar.component.html',
  styleUrl: './nabvar.component.scss'
})
export class NabvarComponent {
@Output() menuSelected = new EventEmitter<number>();

 menu:{title: string, route:string } [] = [
    {
        title: 'Categorias',
        route: 'categories'
      },
      {
        title: 'Clientes',
        route: 'customers'
      },
      {
        title: 'Menu',
        route: 'menu'
      },
      {
        title: 'Ordenes',
        route: 'orders'
      },
    ];

selectMenu(index: number):void{
  this.menuSelected.emit(index);
}

}
