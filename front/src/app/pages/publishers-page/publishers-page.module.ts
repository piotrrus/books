import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/modules/shared.module';
import { RouterModule } from '@angular/router';
import { PublishersPageComponent } from './publishers-page.component';
import { PublishersService } from 'src/app/shared/services';

@NgModule({
  declarations: [PublishersPageComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: PublishersPageComponent },
    ])
  ],
  providers: [PublishersService],
})
export class PublishersPageModule { }
