import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-authors-table',
  templateUrl: './authors-table.component.html',
  styleUrls: ['./authors-table.component.css']
})
export class AuthorsTableComponent implements OnInit {
  @Input() tableData: any;

  constructor() { }

  ngOnInit() {
  }

}
