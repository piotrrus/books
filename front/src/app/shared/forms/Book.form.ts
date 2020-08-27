import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Base } from './Base.form';

export class GenreForm extends Base {

  private _form: FormGroup;

  constructor(
    public fb: FormBuilder,
  ) {
    super(fb);
    this.createForm();
  }

  createForm(): FormGroup {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(30)]],
      idAuthor: ['', [Validators.required]],
      idGenre: ['', [Validators.required]],
      idPublisher: ['', [Validators.required]]
    });

    return this.form;
  }

  get title() {
    return this.form.get('title');
  }

  get idGenre() {
    return this.form.get('idGenre');
  }

  get idAuthor() {
    return this.form.get('idAuthor');
  }

  get idPublisher() {
    return this.form.get('idPublisher');
  }

  get form(): FormGroup {
    return this._form;
  }

  set form(value: FormGroup) {
    this._form = value;
  }

}
