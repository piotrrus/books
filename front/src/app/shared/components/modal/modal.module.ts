import { NgModule } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { ModalComponent } from './modal.component';

import { AuthorFormComponent } from '../../components/forms/author-form/author-form.component';
import { BookFormComponent } from '../../components/forms/book-form/book-form.component';
import { GenreFormComponent } from '../../components/forms/genre-form/genre-form.component';
import { PublishersFormComponent } from '../../components/forms/publishers-form/publishers-form.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ModalComponent, BookFormComponent, AuthorFormComponent, GenreFormComponent, PublishersFormComponent],
  exports: [ModalComponent, BookFormComponent, AuthorFormComponent, GenreFormComponent, FormGroup, ReactiveFormsModule],
  imports: [
    SharedModule, ModalComponent, BookFormComponent, AuthorFormComponent, GenreFormComponent
  ]
})
export class ModalModule { }
