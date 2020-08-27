import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { AuthorDetailsPageComponent } from './author-details-page.component';
import { AuthorsService } from 'src/app/shared/services';

@NgModule({
  declarations: [AuthorDetailsPageComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: AuthorDetailsPageComponent },
    ])
  ],
  providers: [AuthorsService],
})
export class AuthorDetailsPageModule { }
