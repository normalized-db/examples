import { NgModule } from '@angular/core';
import { ArticleSharedModule } from '../article/shared/article.shared-module';
import { CommentSharedModule } from '../comment/shared/comment.shared-module';
import { SharedModule } from '../shared/shared.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserIndexComponent } from './user-index/user-index.component';
import { UserListComponent } from './user-list/user-list.component';
import { routing } from './user.routing';

@NgModule({
  imports: [
    routing,
    SharedModule,
    ArticleSharedModule,
    CommentSharedModule
  ],
  declarations: [
    UserIndexComponent,
    UserListComponent,
    UserDetailComponent
  ]
})
export class UserModule {
}
