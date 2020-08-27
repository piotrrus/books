import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../shared/services';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-authors-page',
  templateUrl: './authors-page.component.html',
  styleUrls: ['./authors-page.component.css']
})
export class AuthorsPageComponent implements OnInit {

  public dataLength = 1;
  public tableData: any = [];
  public temp = [];

  constructor(
    private authorsService: AuthorsService
  ) { }

  ngOnInit() {
    this.getAuthorsList();
  }

  private getAuthorsList(): void {
    this.tableData = [];
    this.authorsService.getAll().pipe(
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

  public updateFilter(event): void {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(d => {
      return (
        d.name.toLowerCase().indexOf(val) !== -1 || !val)
        || ((d.name !== undefined) ? d.name.toLowerCase().indexOf(val) !== -1 || !val : '');
    });
    this.tableData = temp;
  }

}
