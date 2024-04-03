import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, Signal, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '@interfaces/menu/menu';
import { MenuService } from '@service/menu.service';
import { menusComponents } from './components/menu-components';
import { ColorDirective } from '@directives/color.directive';
import { ActiveWordMayusPipe } from '@pipes/active-word-mayus.pipe';

@Component({
  selector: 'menu',
  standalone: true,
  imports: [CommonModule, ...menusComponents, ColorDirective, ActiveWordMayusPipe],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
  private menusService = inject(MenuService);
  private activatedRoute = inject(ActivatedRoute);


  // categories: Signal<Categories[] | undefined> = toSignal(this.categoryService.getAllCategories());//this.categoryService.getCategories();
  categories: Signal<Menu[] | undefined> = toSignal(this.menusService.allMenus$);
  showForm = signal<boolean>(false);


  showFormFn(): void {
    this.showForm.set(!this.showForm());
  }

  addDataFn(menu: Menu): void {
    menu.id = this.categories()!.length + 1;
    // this.categories.push(category);
    this.menusService.postNewMenu(menu).subscribe(console.log);
    this.showForm.set(false);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      console.log(data);
      if (data['id']) {
        this.showFormFn();
      }
    });
  }
  //********
  //********
  //********             PRIVATE METHODS
  //********
  //********

  private getAllMenus(): void {
    // this.categoryService.getAllCategories().subscribe((response) => this.categories = response);
    this.menusService.getAllMenus().subscribe(console.log);

}
}
