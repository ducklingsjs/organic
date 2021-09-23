import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../models/order';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
  @Input() orderItem: Order;

  constructor() { }

  ngOnInit(): void {
  }

}
