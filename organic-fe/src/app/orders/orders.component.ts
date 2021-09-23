import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {

  public readonly orders$ = this.createOrdersDataObservable();

  constructor(
    private readonly ordersService: OrdersService
  ) { }


  private createOrdersDataObservable(): Observable<Array<Order>>{
    return this.ordersService.getOrders(1);
  }


}
