import { Component, OnInit, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.css']
})
export class BooksTableComponent implements OnInit {

  @Input() tableData: any;

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {
  }


  // openModal(formData?: any) {
  //   const initialState = {
  //     formData: formData ? formData : null,
  //     title: formData ? 'Edytuj wydawcę' : 'Dodaj wydawcę',
  //     formName: 'publisher'
  //   };
  //   console.log(initialState);
  //   this.modalRef = this.modalService.show(ModalComponent, { initialState });
  // }

}
