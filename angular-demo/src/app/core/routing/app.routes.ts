import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/article'
  },
  {
    path: 'article',
    loadChildren: '../../article/article.module#ArticleModule'
  },
  {
    path: 'user',
    loadChildren: '../../user/user.module#UserModule'
  },
  {
    path: 'error',
    loadChildren: '../error/error.module#ErrorModule'
  },
  {
    path: '**',
    redirectTo: '/error/not-found'
  }
];
