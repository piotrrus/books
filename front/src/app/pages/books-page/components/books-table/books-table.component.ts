import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.css']
})
export class BooksTableComponent implements OnInit {

  @Input() tableData: any;

  constructor() { }

  ngOnInit() {
  }

}
