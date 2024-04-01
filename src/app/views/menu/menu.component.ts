import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { octPlus } from '@ng-icons/octicons';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  viewProviders: [provideIcons({ octPlus })]
})
export class  MenuComponent implements OnInit {
  private menusService = inject(CategoriesServices);
  private activatedRoute = inject(ActivatedRoute);


  menus: Signal<Menus[] | undefined> = toSignal(this.menusService.allCategories$);



}
