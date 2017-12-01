import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { UserSharedModule } from '../../user/shared/user.shared-module';
import { ArticleListComponent } from './article-list/article-list.component';

@NgModule({
  imports: [
    SharedModule,
    UserSharedModule
  ],
  declarations: [
    ArticleListComponent
  ],
  exports: [
    ArticleListComponent
  ]
})
export class ArticleSharedModule {
}
