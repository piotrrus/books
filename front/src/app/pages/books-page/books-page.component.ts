import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/services';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit {

  public dataLength = 1;
  public tableData: any = [];
  public temp = [];

  constructor(
    private booksService: BooksService
  ) { }

  ngOnInit() {
    this.getBookList();
  }

  private getBookList(): void {
    this.tableData = [];
    this.booksService.getAll().pipe(
      tap(
        data => {
          this.tableData = data.data.attributes;
          this.dataLength = this.tableData.length;
          this.temp = this.tableData;
          console.log(this.tableData);
        })
    )
      .subscribe();
  }

}
