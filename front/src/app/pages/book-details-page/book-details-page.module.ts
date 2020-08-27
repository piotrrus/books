import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { BookDetailsPageComponent } from './book-details-page.component';
import { BooksService } from 'src/app/shared/services';

@NgModule({
  declarations: [BookDetailsPageComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: BookDetailsPageComponent },
    ])
  ],
  providers: [BooksService],
})
export class BookDetailsPageModule { }
