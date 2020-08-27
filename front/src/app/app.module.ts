import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing/routing-module/routing.module';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { NavigationComponent } from './shared/components/navigation/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent, NavigationComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
