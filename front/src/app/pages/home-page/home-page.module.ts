import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { AuthorsService, BooksService, BookGenresService, PublishersService } from 'src/app/shared/services';
import { BookCardComponent } from '../../shared/components/book-card/book-card.component';

@NgModule({
  declarations: [HomePageComponent, BookCardComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: HomePageComponent },
    ])
  ],
  providers: [AuthorsService, BooksService, BookGenresService, PublishersService],
})
export class HomePageModule { }
