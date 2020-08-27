import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/modules/shared.module';
import { RouterModule } from '@angular/router';
import { AuthorsPageComponent } from './authors-page.component';
import { AuthorsTableComponent } from './components/authors-table/authors-table.component';
import { AuthorsService } from '../../shared/services';

@NgModule({
  declarations: [AuthorsPageComponent, AuthorsTableComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: AuthorsPageComponent },
    ])
  ],
  providers: [AuthorsService],
})
export class AuthorsPageModule { }
