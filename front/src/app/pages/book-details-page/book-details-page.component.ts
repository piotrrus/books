import { Component, OnInit } from '@angular/core';
import { AuthorsService, BooksService, BookGenresService, PublishersService } from 'src/app/shared/services';
import { tap } from 'rxjs/operators';
import { BookModel } from 'src/app/shared/models/book.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details-page',
  templateUrl: './book-details-page.component.html',
  styleUrls: ['./book-details-page.component.scss']
})
export class BookDetailsPageComponent implements OnInit {

  bookData: BookModel;
  max = 9;
  rate = 5;

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getBookData(id);
  }

  getBookData(id: number): void {
    this.booksService.show(id).subscribe(data => {
      this.bookData = data.data.attributes[0];
      console.log(this.bookData[0]);
    });
  }

}
