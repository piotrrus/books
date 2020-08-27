import { Component, OnInit } from '@angular/core';
import { AuthorForm } from 'src/app/shared/forms/Author.form';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BaseComponent } from '../../base/base.component';
// import { ErrorMsgService } from '../../../services/error-msg.service';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.scss']
})
export class AuthorFormComponent extends BaseComponent implements OnInit {

  public authorForm: AuthorForm;

  constructor(
    private fb: FormBuilder,
    // private validationService: ErrorMsgService,
  ) {
    super();
    this.authorForm = new AuthorForm(fb);
  }

  ngOnInit() {
  }

}
