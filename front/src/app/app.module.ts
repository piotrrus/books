import { ModalComponent } from './shared/components/modal/modal.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing-module/routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/modules/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent, NavigationComponent, ModalComponent
  ],
  entryComponents: [
    ModalComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
