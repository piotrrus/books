import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  @Input() public bookData: BookModel;
  @Output() public bookId = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public getBookDetails(id: number) {
    console.log(id);
    this.bookId.emit(id);
  }


}
