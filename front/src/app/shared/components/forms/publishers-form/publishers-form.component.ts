import { Component, OnInit } from '@angular/core';
import { PublisherForm } from 'src/app/shared/forms/Publisher.form';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'app-publishers-form',
  templateUrl: './publishers-form.component.html',
  styleUrls: ['./publishers-form.component.scss']
})
export class PublishersFormComponent extends BaseComponent implements OnInit {

  public publisherForm: PublisherForm;

  constructor(
    private fb: FormBuilder,
  ) {
    super();
    this.publisherForm = new PublisherForm(fb);
  }

  ngOnInit() {
  }

}
