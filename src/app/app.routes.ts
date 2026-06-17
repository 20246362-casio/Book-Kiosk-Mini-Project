import { Routes } from '@angular/router';

import { HomeComponent } from './home/home';
import { BrowseComponent } from './browse/browse';
import { OrdersComponent } from './orders/orders';

export const routes: Routes = [

  {
    path:'',
    component:HomeComponent
  },

  {
    path:'home',
    component:HomeComponent
  },

  {
    path:'browse',
    component:BrowseComponent
  },

  {
    path:'orders',
    component:OrdersComponent
  }

];