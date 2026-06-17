import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BookService } from '../services/book.services';

@Component({
  selector:'app-nav',
  standalone:true,

  imports:[
    RouterLink,
    RouterLinkActive
  ],

  templateUrl:'./nav.html',
  styleUrl:'./nav.css'
})
export class NavComponent {
  constructor(
    public bookService:BookService
  ){}
}