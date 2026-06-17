import { Component } from '@angular/core';
import { BookService } from '../services/book.services';
import { BookCardComponent } from '../book-card/book-card';

@Component({
  selector: 'app-browse',
  standalone: true,

  imports:[
    BookCardComponent
  ],

  templateUrl:'./browse.html',
  styleUrls:['./browse.css']
})
export class BrowseComponent {

  constructor(
    public bookService:BookService
  ){}

  addBook(book:any){
    this.bookService.addToCart(book);
  }

}