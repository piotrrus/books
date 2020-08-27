import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/modules/shared.module';
import { RouterModule } from '@angular/router';
import { GenresPageComponent } from './genres-page.component';
import { BookGenresService } from '../../shared/services/';


@NgModule({
  declarations: [GenresPageComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: GenresPageComponent },
    ])
  ],
  providers: [BookGenresService],
})
export class GenresPageModule { }
