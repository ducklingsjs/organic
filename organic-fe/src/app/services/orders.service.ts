import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from '../models/order';

const API_URL = 'localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getOrders(vendorId: number): Observable<Array<Order>>{
    return this.httpClient.get<Array<Order>>(`${API_URL}/orders/${vendorId}`);
  }

}
