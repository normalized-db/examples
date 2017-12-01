import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ListResult, Parent } from '@normalized-db/data-store';
import { Comment } from '../../../core/entity/comment';
import { User } from '../../../core/entity/user';
import { DataStoreService } from '../../../core/service/data-store.service';
import { UtilitiesService } from '../../../core/service/utilities.service';

@Component({
  selector: 'app-comment-modal',
  templateUrl: './comment-modal.component.html',
  styleUrls: ['./comment-modal.component.scss']
})
export class CommentModalComponent implements OnInit {

  public static writeComment(dialog: MdDialog, articleId: number): Promise<Comment> {
    const dialogRef = dialog.open(CommentModalComponent);
    dialogRef.componentInstance.articleId = articleId;

    return dialogRef.afterClosed().toPromise();
  }

  public articleId: number;
  public users: ListResult<User>;

  public comment: string;
  public user: User;

  constructor(private dialogRef: MdDialogRef<CommentModalComponent>,
              private utilities: UtilitiesService,
              private dataStore: DataStoreService) {
  }

  public async ngOnInit() {
    this.users = await this.dataStore.find<User>('user').result();
    this.user = this.users.first;
  }

  public async onSave() {
    if (!this.isValid) {
      return;
    }

    const comment = new Comment(this.comment, this.user);
    const parent = new Parent('article', this.articleId, 'comments');
    if (await this.dataStore.create<Comment>('comment', comment, parent)) {
      this.utilities.showSnackBar('Successfully commented on article');
      this.dialogRef.close(comment);
    }
  }

  private get isValid() {
    return this.comment && this.user;
  }
}
