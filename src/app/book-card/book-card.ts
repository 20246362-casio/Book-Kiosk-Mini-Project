import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-card',
  standalone: true,
  templateUrl: './book-card.html',
  styleUrl: './book-card.css'
})
export class BookCardComponent {

  @Input() book:any;

  @Output() addBook =
    new EventEmitter<any>();

  add(){
    this.addBook.emit(this.book);
  }

}