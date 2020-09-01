import { Component, OnInit } from '@angular/core';
import { PublishersService } from 'src/app/shared/services';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { tap } from 'rxjs/operators';
import { ModalHelper } from '../../shared/helpers/modal-helper';

@Component({
  selector: 'app-publishers-page',
  templateUrl: './publishers-page.component.html',
  styleUrls: ['./publishers-page.component.scss']
})
export class PublishersPageComponent implements OnInit {

  public dataLength = 1;
  public tableData: any = [];
  public temp = [];
  private modalRef: BsModalRef;
  // modalHelper = new ModalHelper(this.modalService);

  constructor(
    private publishersService: PublishersService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.getPublishersList();
    this.modalListener();
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

  openModal(formData?: any) {
    const initialState = {
      formData: formData ? formData : null,
      title: formData ? 'Edytuj wydawcę' : 'Dodaj wydawcę',
      formName: 'publisher'
    };
    console.log(initialState);
    this.modalRef = this.modalService.show(ModalComponent, { initialState });
  }

  private modalListener() {
    this.modalService.onHide
      .pipe()
      .subscribe(() => {
        this.getPublishersList();
      });
  }

}
