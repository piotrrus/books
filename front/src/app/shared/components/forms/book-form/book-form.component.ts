import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { FormBuilder } from '@angular/forms';
import { BookForm } from '../../../forms/Book.form';
import { tap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { AuthorsService, BooksService, BookGenresService, PublishersService } from 'src/app/shared/services';
import { BookModel } from '../../../models/book.model';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { dbOptions } from '../../../enums/db-options.enum';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent extends BaseComponent implements OnInit, OnChanges {

  @Input() formData: any;
  authorsList: any = [];
  genresList: any = [];
  publishersList: any = [];
  bookData: BookModel;
  bookId: number;
  public bookForm: BookForm;

  constructor(
    private fb: FormBuilder,
    private authorsService: AuthorsService,
    private bookGenresService: BookGenresService,
    private publishersService: PublishersService,
    private booksService: BooksService,
    private router: Router,
    public bsModalRef: BsModalRef,
    private toastr: ToastrService
  ) {
    super();
    this.bookForm = new BookForm(fb);
  }

  ngOnInit() {

    this.getData();
    // this.getBookData(id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const formData = changes.formData;
    if (formData.currentValue) {
      console.log(formData.currentValue);
      this.setValues(formData.currentValue);
    }
  }

  private getBookData(id: number) {
    this.booksService.show(id).pipe(
      tap(data => {
        this.bookData = data;
      })
    ).
      subscribe();
  }

  private getData() {
    this.getListData().subscribe(data => {
      console.log(data);
      this.authorsList = data[0].data.attributes;
      this.genresList = data[1].data.attributes;
      this.publishersList = data[2].data.attributes;

      console.log(this.authorsList);

    });
  }

  private getListData() {
    return forkJoin(
      this.authorsService.getAll(),
      this.bookGenresService.getAll(),
      this.publishersService.getAll()
    );
  }

  private setValues(bookData) {
    this.bookForm.title.setValue(bookData.title);
    this.bookForm.id_author.setValue(Number(bookData.id_author));
    this.bookForm.id_genre.setValue(bookData.id_genre);
    this.bookForm.id_publisher.setValue(bookData.id_publisher);

    if (bookData.id) {
      this.bookId = bookData.id;
    }

  }

  writeData() {
    this.bsModalRef.hide();

    if (this.bookForm.form.valid) {
      const formData = this.bookForm.form.getRawValue();
      console.log(formData);
      if (this.bookId) {
        this.booksService.update(this.bookId, formData).pipe(
          tap(
            data => {
              this.checkIfSuccess(data, dbOptions.UPDATE);
            })
        ).subscribe();
      } else {
        this.booksService.add(formData).pipe(
          tap(
            data => {
              this.checkIfSuccess(data, dbOptions.ADD);
            })
        ).subscribe();
      }
    }
  }

  checkIfSuccess(data, mode) {
    if (mode === dbOptions.ADD) {
      console.log('added', mode);
    } else if (mode === dbOptions.UPDATE) {
      console.log('updated', mode);
    }
  }

}
