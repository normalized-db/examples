import { Component, Input } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ListResult } from '../../../../../../../normalized-db-data-store/lib/index';
import { Comment } from '../../../core/entity/comment';
import { DataStoreService } from '../../../core/service/data-store.service';
import { UtilitiesService } from '../../../core/service/utilities.service';
import { CommentModalComponent } from '../comment-modal/comment-modal.component';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent {

  @Input() public articleId: number;
  @Input() public comments: ListResult<Comment>;

  constructor(private dialog: MdDialog,
              private utilities: UtilitiesService,
              private dataStore: DataStoreService) {
  }

  public async writeComment() {
    const comment = await CommentModalComponent.writeComment(this.dialog, this.articleId);
    if (comment) {
      this.comments.push(comment);
    }
  }

  public async onDelete(comment: Comment, index: number) {
    if (await this.dataStore.remove('comment', comment.id)) {
      this.comments.removeAt(index);
      this.utilities.showSnackBar('Successfully removed comment #' + comment.id);
    } else {
      this.utilities.showSnackBar('Could not remove comment');
    }
  }
}
