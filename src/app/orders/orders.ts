import { Component } from '@angular/core';
import { BookService } from '../services/book.services';

@Component({
  selector: 'app-orders',
  standalone: true,
  templateUrl: './orders.html',
  styleUrl: './orders.css'
})
export class OrdersComponent {

  constructor(
    public bookService: BookService
  ) {}

}