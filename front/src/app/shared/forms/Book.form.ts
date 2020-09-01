import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Base } from './Base.form';
import { textValidator } from '../validators/custom-text.validator';

export class BookForm extends Base {

  private _form: FormGroup;

  constructor(
    public fb: FormBuilder,
  ) {
    super(fb);
    this.createForm();
  }

  createForm(): FormGroup {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(30), textValidator]],
      id_author: ['', [Validators.required]],
      id_genre: ['', [Validators.required]],
      id_publisher: ['', [Validators.required]]
    });

    return this._form;
  }

  get title() {
    return this.form.get('title');
  }

  get id_genre() {
    return this.form.get('id_genre');
  }

  get id_author() {
    return this.form.get('id_author');
  }

  get id_publisher() {
    return this.form.get('id_publisher');
  }

  get form(): FormGroup {
    return this._form;
  }

  set form(value: FormGroup) {
    this._form = value;
  }

}
