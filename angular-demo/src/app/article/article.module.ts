import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleIndexComponent } from './article-index/article-index.component';
import { routing } from './article.routing';

@NgModule({
  imports: [
    routing,
    SharedModule
  ],
  declarations: [
    ArticleIndexComponent,
    ArticleDetailComponent
  ]
})
export class ArticleModule {
}
