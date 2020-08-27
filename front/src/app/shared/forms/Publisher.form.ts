import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Base } from './Base.form';

export class PublisherForm extends Base {

  private _form: FormGroup;

  constructor(
    public fb: FormBuilder,
  ) {
    super(fb);
    this.createForm();
  }

  createForm(): FormGroup {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(30)]]
    });

    return this.form;
  }

  get name() {
    return this.form.get('name');
  }

  get form(): FormGroup {
    return this._form;
  }

  set form(value: FormGroup) {
    this._form = value;
  }

}
