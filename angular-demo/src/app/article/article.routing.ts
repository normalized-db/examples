import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleIndexComponent } from './article-index/article-index.component';

const routes: Routes = [
  {
    path: '',
    component: ArticleIndexComponent
  },
  {
    path: ':articleId',
    component: ArticleDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
