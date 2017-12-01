import { NgModule } from '@angular/core';
import { CommentSharedModule } from '../comment/shared/comment.shared-module';
import { SharedModule } from '../shared/shared.module';
import { UserSharedModule } from '../user/shared/user.shared-module';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleIndexComponent } from './article-index/article-index.component';
import { routing } from './article.routing';
import { ArticleSharedModule } from './shared/article.shared-module';

@NgModule({
  imports: [
    routing,
    SharedModule,
    ArticleSharedModule,
    UserSharedModule,
    CommentSharedModule
  ],
  declarations: [
    ArticleIndexComponent,
    ArticleDetailComponent
  ]
})
export class ArticleModule {
}
