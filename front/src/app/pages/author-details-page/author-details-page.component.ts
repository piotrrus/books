import { Component, OnInit } from '@angular/core';
import { AuthorsService } from 'src/app/shared/services';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author-details-page',
  templateUrl: './author-details-page.component.html',
  styleUrls: ['./author-details-page.component.scss']
})
export class AuthorDetailsPageComponent implements OnInit {

  authorData: any;
  modalRef: BsModalRef;
  constructor(
    private authorsService: AuthorsService,
    private modalService: BsModalService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getAuthorData(id);
  }

  getAuthorData(id: number): void {
    this.authorsService.show(id).subscribe(data => {
      this.authorData = data.data.attributes;
      console.log(this.authorData);
    });
  }

  openModal(element) {
    const initialState = {
      data: element,
      title: 'Autor',
      closeBtnName: 'Zapisz',
      formName: 'contractor'
    };

    // this.modalRef = this.modalService.show(ModalComponent, { initialState });
  }

}
