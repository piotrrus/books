import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

import { MaterialModule } from './material.module';
import { BootstrapModule } from './bootstrap.module';

import { RestApiService } from '../services/api-service.service';
// import { ErrorMsgService } from '../services/error-msg.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ErrorMsgService } from '../services/error-msg.service';
// import { BasePageComponent } from '../../pages/base-page/base-page.component';
// import { ModalModule } from 'ngx-bootstrap';

const SHARED_MODULES = [
  CommonModule,
  BootstrapModule,
  MaterialModule,
  ToastrModule,
  FormsModule,
  ReactiveFormsModule,
  NgxDatatableModule
]

@NgModule({
  declarations: [
    // ModalComponent,

    PageNotFoundComponent,
    // BasePageComponent,
    // NoDataMsgComponent,
    // DialogComponent,
    // ConfirmationDialogComponent
    // UpperFirstDirective
  ], exports: [
    SHARED_MODULES,
    RouterModule,
    // ToastrModule,
    // FormsModule,
    // ReactiveFormsModule,
    NgxDatatableModule,
    // BasePageComponent,
    // UpperFirstDirective,
  ],
  imports: [
    SHARED_MODULES,
    NgxDatatableModule,
    // ToastrModule,
    // FormsModule,
    // ReactiveFormsModule,
    RouterModule,
    // ModalModule.forRoot()
  ],
  providers: [
    // httpInterceptorProviders,
    // JwtTokenProvider
    RestApiService, ErrorMsgService
    // StaticDictService, AppConfigService
  ]
})
export class SharedModule { }
