import { Routes } from '@angular/router';
import { Trendify } from './trendify/trendify';
import { Home } from './home/home';
import { Cart } from './cart/cart';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'cart', component: Cart },

  {
    path: 'trendify',
    component: Trendify,
  },
  { path: 'products', loadComponent: () => import(`./products/products`).then((c) => c.Products) },
  { path: '**', component: NotFound },
];
