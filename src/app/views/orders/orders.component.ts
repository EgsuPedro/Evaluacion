import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ordersComponents } from './components/orders-component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, ...ordersComponents],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export default class OrdersComponent {

}
