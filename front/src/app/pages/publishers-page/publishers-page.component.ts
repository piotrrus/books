import { Component, OnInit } from '@angular/core';
import { PublishersService } from 'src/app/shared/services';
import { tap } from 'rxjs/operators';
import { ColumnMode, SortType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-publishers-page',
  templateUrl: './publishers-page.component.html',
  styleUrls: ['./publishers-page.component.css']
})
export class PublishersPageComponent implements OnInit {

  public dataLength = 1;
  public tableData: any = [];
  public temp = [];

  ColumnMode = ColumnMode;
  SortType = SortType;

  constructor(
    private publishersService: PublishersService
  ) { }

  ngOnInit() {
    this.getPublishersList();
  }

  private getPublishersList(): void {
    this.tableData = [];
    this.publishersService.getAll().pipe(
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

  public publisherDetails(data) {
    console.log(data);
  }

}
