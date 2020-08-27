import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthorsPageComponent } from '../../pages/authors-page/authors-page.component';
// import { PageNotFoundComponent } from '../ui/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../../pages/home-page/home-page.module').then(m => m.HomePageModule),
  },
  {
    path: 'home',
    loadChildren: () => import('../../pages/home-page/home-page.module').then(m => m.HomePageModule),
  },
  {
    path: 'authors',
    // component: AuthorsPageComponent
    loadChildren: () => import('../../pages/authors-page/authors-page.module').then(m => m.AuthorsPageModule),
    // canActivate: [AdminGuard]
  },
  {
    path: 'books',
    loadChildren: () => import('../../pages/books-page/books-page.module').then(m => m.BooksPageModule),
    // canActivate: [AdminGuard]
  },
  {
    path: 'genres',
    loadChildren: () => import('../../pages/genres-page/genres-page.module').then(m => m.GenresPageModule),
    // canActivate: [AdminGuard]
  },
  {
    path: 'publishers',
    loadChildren: () => import('../../pages/publishers-page/publishers-page.module').then(m => m.PublishersPageModule),
    // canActivate: [AdminGuard]
  },

  // { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
