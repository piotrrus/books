import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseComponent } from '../../base/base.component';
import { AuthorForm } from '../../../forms/Author.form';
import { AuthorsService } from '../../../services/authors.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { dbOptions } from '../../../enums/db-options.enum';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.scss']
})
export class AuthorFormComponent extends BaseComponent implements OnInit, OnChanges {

  @Input() formData: any;
  public authorForm: AuthorForm;
  authorId: number;

  constructor(
    private fb: FormBuilder,
    private authorsService: AuthorsService,
    private router: Router,
    public bsModalRef: BsModalRef,
    private toastr: ToastrService
  ) {
    super();
    this.authorForm = new AuthorForm(fb);
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
    console.log(authorData);
    this.authorForm.name.setValue(authorData.name);
    if (authorData.id) {
      this.authorId = authorData.id;
    }
  }

  writeData() {
    this.bsModalRef.hide();

    if (this.authorForm.form.valid) {
      const formData = this.authorForm.form.getRawValue();
      console.log(formData);
      if (this.authorId) {
        this.authorsService.update(this.authorId, formData).pipe(
          tap(
            data => {
              this.checkIfSuccess(data, dbOptions.UPDATE);
            })
        ).subscribe();
      } else {
        this.authorsService.add(formData).pipe(
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
