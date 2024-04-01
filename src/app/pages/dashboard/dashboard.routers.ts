import { Routes } from '@angular/router';
import { CategoriesServices } from '@service/categories.service';
import { resolverCategoryResolver } from '../../core/resolvers/resolver-category.resolver';

const routes: Routes = [
    {
        path: 'categories',
        loadComponent: () => import('../../views/categories/categories.component').then((m) => m.CategoriesComponent),
        providers: [CategoriesServices],
        resolve: { categories: resolverCategoryResolver }
    },
    {
        path: 'categories/:id',
        loadComponent: () => import('../../views/categories/categories.component').then((m) => m.CategoriesComponent),
        providers: [CategoriesServices],
        resolve: { categories: resolverCategoryResolver }
    },
    {
        path: 'customers',
        loadComponent: () => import('../../views/customers/customers.component'),
    },
    {
        path: 'menu',
        loadComponent: () => import('../../views/menu/menu.component'),
    },
    {
        path: 'orders',
        loadComponent: () => import('../../views/orders/orders.component'),
    },
    {
        path: '',
        redirectTo: 'categories',
        pathMatch: 'full'
    },
];

export default routes;