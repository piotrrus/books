import { Component, OnInit } from '@angular/core';
import { AuthorsService, BooksService, BookGenresService, PublishersService } from 'src/app/shared/services';
import { tap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { BookModel } from '../../../models/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  authorsList: any = [];
  genresList: any = [];
  publishersList: any = [];
  bookData: BookModel;

  constructor(
    private authorsService: AuthorsService,
    private bookGenresService: BookGenresService,
    private publishersService: PublishersService,
    private booksService: BooksService,
  ) { }

  ngOnInit() {

    this.getData();
    // this.getBookData(id);
  }

  private getBookData(id: number) {
    this.booksService.show(id).pipe(
      tap(data => {
        this.bookData = data;
      })
    ).
      subscribe();
  }

  private getData() {
    this.getListData().subscribe(data => {
      console.log(data);
      this.authorsList = data[0].data.attributes;
      this.genresList = data[1].data.attributes;
      this.publishersList = data[2].data.attributes;
    });
  }

  private getListData() {
    return forkJoin(
      this.authorsService.getAll(),
      this.bookGenresService.getAll(),
      this.publishersService.getAll()
    );
  }

}
