import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentModalComponent } from './components/comment-modal/comment-modal.component';
import { EmptyListComponent } from './components/empty-list/empty-list.component';
import { EmptyComponent } from './components/empty/empty.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { StatusModalComponent } from './components/status-modal/status-modal.component';
import { UserLinkComponent } from './components/user-link/user-link.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    EmptyListComponent,
    EmptyComponent,
    ImageUploadComponent,
    StatusModalComponent,
    ArticleListComponent,
    CommentListComponent,
    CommentModalComponent,
    UserLinkComponent
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule,
    EmptyListComponent,
    EmptyComponent,
    ArticleListComponent,
    CommentListComponent,
    UserLinkComponent
  ],
  entryComponents: [
    ImageUploadComponent,
    CommentModalComponent,
    StatusModalComponent
  ]
})
export class SharedModule {
}
