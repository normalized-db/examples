import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { UserSharedModule } from '../../user/shared/user.shared-module';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentModalComponent } from './comment-modal/comment-modal.component';

@NgModule({
  imports: [
    SharedModule,
    UserSharedModule
  ],
  declarations: [
    CommentListComponent,
    CommentModalComponent
  ],
  exports: [
    CommentListComponent
  ],
  entryComponents: [
    CommentModalComponent
  ]
})
export class CommentSharedModule {
}
