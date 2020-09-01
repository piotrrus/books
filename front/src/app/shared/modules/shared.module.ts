import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { BootstrapModule } from './bootstrap.module';
import { ToastrModule } from 'ngx-toastr';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

import { RestApiService } from '../services/api-service.service';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ErrorMsgService } from '../services/error-msg.service';

import { ModalModule } from 'ngx-bootstrap/modal';
import { AuthorFormComponent } from '../components/forms/author-form/author-form.component';
import { BookFormComponent } from '../components/forms/book-form/book-form.component';
import { PublishersFormComponent } from '../components/forms/publishers-form/publishers-form.component';
import { GenreFormComponent } from '../components/forms/genre-form/genre-form.component';
import { TrimDirective } from '../directives/trim.directive';
import { UpperFirstDirective } from '../directives/upper-first.directive';

const SHARED_MODULES = [
  CommonModule,
  BootstrapModule,
  MaterialModule,
  ToastrModule,
  FormsModule,
  ReactiveFormsModule,
  NgxDatatableModule,
];

@NgModule({
  declarations: [
    PageNotFoundComponent,
    AuthorFormComponent,
    BookFormComponent,
    PublishersFormComponent,
    GenreFormComponent,
    TrimDirective,
    UpperFirstDirective
  ],
  exports: [
    SHARED_MODULES,
    RouterModule,
    NgxDatatableModule,
    AuthorFormComponent,
    BookFormComponent,
    PublishersFormComponent,
    GenreFormComponent
  ],
  imports: [
    SHARED_MODULES,
    NgxDatatableModule,
    RouterModule,
    ModalModule.forRoot()
  ],
  providers: [
    RestApiService, ErrorMsgService
  ]
})
export class SharedModule { }
