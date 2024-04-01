import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NabvarComponent } from '../../shared/nabvar/nabvar.component';
import { HeaderDashboardComponent } from '../../shared/header-dashboard/header-dashboard.component';
//import { views } from '../../views/views';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [CommonModule, NabvarComponent, HeaderDashboardComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export default class  DashboardComponent {
indexMenuSelected: number =0;
}
