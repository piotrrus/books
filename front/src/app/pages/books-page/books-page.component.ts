import { Component, OnInit, SimpleChanges } from '@angular/core';
import { BooksService } from 'src/app/shared/services';
import { tap } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../../shared/components/modal/modal.component';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss']
})
export class BooksPageComponent implements OnInit {

  public dataLength = 1;
  public tableData: any = [];
  public temp = [];
  private modalRef: BsModalRef;

  constructor(
    private booksService: BooksService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.getBookList();
    this.modalListener();
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

  openModal(formData?: any) {
    const initialState = {
      formData: formData ? formData : null,
      title: formData ? 'Edytuj książkę' : 'Dodaj książkę',
      formName: 'book'
    };
    this.modalRef = this.modalService.show(ModalComponent, { initialState });
  }

  private modalListener() {
    this.modalService.onHide
      .pipe()
      .subscribe(() => {
        this.getBookList();
      });
  }

}
