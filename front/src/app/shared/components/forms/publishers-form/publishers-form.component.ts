import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { PublisherForm } from 'src/app/shared/forms/Publisher.form';
import { FormBuilder } from '@angular/forms';
import { BaseComponent } from '../../base/base.component';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { dbOptions } from '../../../enums/db-options.enum';
import { tap } from 'rxjs/operators';
import { PublishersService } from 'src/app/shared/services';

@Component({
  selector: 'app-publishers-form',
  templateUrl: './publishers-form.component.html',
  styleUrls: ['./publishers-form.component.scss']
})
export class PublishersFormComponent extends BaseComponent implements OnInit, OnChanges {

  @Input() formData: any;
  public publisherForm: PublisherForm;
  private publisherId: number;

  constructor(
    private fb: FormBuilder,
    private publishersService: PublishersService,
    public bsModalRef: BsModalRef,
    private toastr: ToastrService
  ) {
    super();
    this.publisherForm = new PublisherForm(fb);
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const formData = changes.formData;
    if (formData.currentValue) {
      console.log(formData.currentValue);
      this.setValues(formData.currentValue);
    }
  }

  private setValues(publisherData) {
    this.publisherForm.name.setValue(publisherData.name);
    if (publisherData.id) {
      this.publisherId = publisherData.id;
    }
  }

  writeData() {
    this.bsModalRef.hide();

    if (this.publisherForm.form.valid) {
      const formData = this.publisherForm.form.getRawValue();
      if (this.publisherId) {
        this.publishersService.update(this.publisherId, formData).pipe(
          tap(
            data => {
              this.checkIfSuccess(data, dbOptions.UPDATE);
            })
        ).subscribe();
      } else {
        this.publishersService.add(formData).pipe(
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
