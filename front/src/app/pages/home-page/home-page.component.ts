import { Component, OnInit } from '@angular/core';
import { AuthorsService, BooksService, BookGenresService, PublishersService } from 'src/app/shared/services';
import { tap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { BookModel } from 'src/app/shared/models/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  popularBooks: BookModel[] = [];
  highRatedBooks: BookModel[] = [];
  latestBooks: BookModel[] = [];
  // allBooks: BookModel[] = [];
  // authors: any = [];
  // publishers: any = [];

  constructor(
    private authorsService: AuthorsService,
    private booksService: BooksService,
    private bookGenresService: BookGenresService,
    private publishersService: PublishersService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.getListData();

    this.getListData().subscribe(data => {
      console.log(data);
      this.latestBooks = data[0].data.attributes;
      this.highRatedBooks = data[1].data.attributes;
      this.popularBooks = data[2].data.attributes;
      // this.allBooks = = data[2].data.attributes;
    });

  }

  private getListData() {
    return forkJoin(
      this.booksService.latest(),
      this.booksService.rates(),
      this.booksService.popular(),
      // this.booksService.getAll()
    );
  }

  // public getDetails($event) {
  //   console.log($event);
  // }

  public searchBooks(event) {

    if (event.length > 3) {
      const val = event.target.value.toLowerCase();
      console.log(val);
    }
    //   this.tableData = this.temp.filter((d) => (
    //     (d.name !== undefined) ? d.name.toLowerCase().indexOf(val) !== -1 || !val : '')
    //     || ((d.email !== null) ? d.email.toLowerCase().indexOf(val) !== -1 || !val : '')
    //     || ((d.phone !== null) ? d.phone.toLowerCase().indexOf(val) !== -1 || !val : '')
    //   );
  }

  public onBookClicked($event) {
    console.log($event);
    this.router.navigate(['/book/' + $event]);
  }

}
