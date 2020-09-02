import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GenreForm } from 'src/app/shared/forms/Genre.form';
import { BaseComponent } from '../../base/base.component';
import { BookGenresService } from '../../../services/book-genres.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { dbOptions } from '../../../enums/db-options.enum';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-genre-form',
  templateUrl: './genre-form.component.html',
  styleUrls: ['./genre-form.component.scss']
})
export class GenreFormComponent extends BaseComponent implements OnInit, OnChanges {

  @Input() formData: any;

  genreData: any;

  public genreForm: GenreForm;
  private genreId: number;

  constructor(
    private fb: FormBuilder,
    private bookGenresService: BookGenresService,
    public bsModalRef: BsModalRef,
    private toastr: ToastrService
  ) {
    super();
    this.genreForm = new GenreForm(fb);
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const formData = changes.formData;
    if (formData.currentValue) {
      this.setValues(formData.currentValue);
    }
  }

  private setValues(authorData) {
    this.genreForm.name.setValue(authorData.name);
    if (authorData.id) {
      this.genreId = authorData.id;
    }
  }

  writeData() {
    this.bsModalRef.hide();

    if (this.genreForm.form.valid) {
      const formData = this.genreForm.form.getRawValue();
      if (this.genreId) {
        this.bookGenresService.update(this.genreId, formData).pipe(
          tap(
            data => {
              this.checkIfSuccess(data, dbOptions.UPDATE);
            })
        ).subscribe();
      } else {
        this.bookGenresService.add(formData).pipe(
          tap(
            data => {
              this.checkIfSuccess(data, dbOptions.ADD);
            })
        ).subscribe();
      }
    }
  }

  checkIfSuccess(data, mode) {
    if (data.success === true) {
      this.showMessage(mode);
    }
  }

  showMessage(mode) {
    if (mode === dbOptions.ADD) {
      console.log('added', mode);
      this.toastr.info('New author has been added');
    } else if (mode === dbOptions.UPDATE) {
      console.log('updated', mode);
      this.toastr.info('The author data has been modified');
    }
  }

}
