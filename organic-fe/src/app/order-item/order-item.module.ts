import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderItemComponent } from './order-item.component';
import {  MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    OrderItemComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ]
})
export class OrderItemModule { }
