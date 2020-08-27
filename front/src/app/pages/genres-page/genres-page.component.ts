import { Component, OnInit } from '@angular/core';
import { BookGenresService } from 'src/app/shared/services/book-genres.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-genres-page',
  templateUrl: './genres-page.component.html',
  styleUrls: ['./genres-page.component.css']
})
export class GenresPageComponent implements OnInit {

  public dataLength = 1;
  public tableData: any = [];
  public temp = [];

  constructor(
    private bookGenresService: BookGenresService
  ) { }

  ngOnInit() {
  }

  private getGenresList() {
    this.tableData = [];
    this.bookGenresService.getAll().pipe(
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
