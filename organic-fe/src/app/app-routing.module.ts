import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pathToFileURL } from 'url';
import { OrdersComponent } from './orders/orders.component';
import { SibebarLayoutComponent } from './sibebar-layout/sibebar-layout.component';

const routes: Routes = [{
  path: '',
  component: SibebarLayoutComponent,
  children: [
    {
      path: 'orders',
      component: OrdersComponent
    }
  ]

},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
