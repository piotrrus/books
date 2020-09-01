import { Component, OnInit } from '@angular/core';
import { BookGenresService } from 'src/app/shared/services/book-genres.service';
import { tap } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../../shared/components/modal/modal.component';

@Component({
  selector: 'app-genres-page',
  templateUrl: './genres-page.component.html',
  styleUrls: ['./genres-page.component.scss']
})
export class GenresPageComponent implements OnInit {

  public dataLength = 1;
  public tableData: any = [];
  public temp = [];
  private modalRef: BsModalRef;

  constructor(
    private bookGenresService: BookGenresService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.getGenresList();
    this.modalListener();
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

  openModal(formData?: any) {
    const initialState = {
      formData: formData ? formData : null,
      title: formData ? 'Edytuj gatunek' : 'Dodaj gatunek',
      formName: 'genre'
    };
    this.modalRef = this.modalService.show(ModalComponent, { initialState });
  }

  private modalListener() {
    this.modalService.onHide
      .pipe()
      .subscribe(() => {
        this.getGenresList();
      });
  }

}
