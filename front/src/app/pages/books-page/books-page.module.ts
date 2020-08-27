import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/modules/shared.module';
import { RouterModule } from '@angular/router';
import { BooksPageComponent } from './books-page.component';
import { BooksTableComponent } from './components/books-table/books-table.component';
import { BooksService } from 'src/app/shared/services';


@NgModule({
  declarations: [BooksPageComponent, BooksTableComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: BooksPageComponent },
    ])
  ],
  providers: [BooksService],
})
export class BooksPageModule { }
