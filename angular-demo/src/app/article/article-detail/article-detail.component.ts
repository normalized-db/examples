import { Component, OnDestroy, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ListResult, ListResultBuilder } from '@normalized-db/data-store';
import { Subscription } from 'rxjs/Subscription';
import { Article } from '../../core/entity/article';
import { Comment } from '../../core/entity/comment';
import { DataStoreService } from '../../core/service/data-store.service';
import { UtilitiesService } from '../../core/service/utilities.service';
import { FileConverter } from '../../core/utility/file-converter';
import { ImageUploadComponent } from '../../shared/components/image-upload/image-upload.component';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit, OnDestroy {

  public article: Article;
  public comments: ListResult<Comment>;
  public imageUri: SafeUrl;

  private routerSubscription: Subscription;
  private articleId: number;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private domSanitizer: DomSanitizer,
              private dialog: MdDialog,
              private utilities: UtilitiesService,
              private dataStore: DataStoreService) {
  }

  public async ngOnInit() {
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.reload();
      }
    });

    this.reload();
  }

  public ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

  public async uploadImage() {
    const result = await this.dialog.open(ImageUploadComponent).afterClosed().toPromise();
    if (result) {
      this.article.image = result;
      this.article.lastModified = new Date();
      if (await this.dataStore.put('article', this.article)) {
        this.utilities.showSnackBar('Uploaded image "' + result.name + '"');
        await this.reloadImage();
      } else {
        this.article.image = null;
        this.utilities.showSnackBar('Could not save image "' + result.name + '"');
      }
    }
  }

  public async remove() {
    if (await this.dataStore.remove('article', this.articleId)) {
      console.log('#article-detail: removed article', this.articleId);
      await this.utilities.showSnackBar('Article #' + this.articleId + ' deleted');
      return this.router.navigate(['/article']);
    } else {
      this.utilities.showSnackBar('Could not delete article #' + this.articleId);
    }
  }

  private async reload() {
    if (!this.activatedRoute) {
      return;
    }

    const params = this.activatedRoute.snapshot.params;
    this.articleId = params['articleId'];
    console.log('#article-detail: show article', this.articleId);

    if (!this.articleId) {
      this.article = this.comments = null;
      return;
    }

    try {
      this.article = await this.dataStore.findByKey<Article>('article', this.articleId).result();
      this.comments = new ListResultBuilder<Comment>().items(this.article.comments).build();
      await this.reloadImage();
      console.log('#article-detail: received', this.article);
    } catch (e) {
      console.warn(e.message);
    }
  }

  private async reloadImage() {
    if (this.article && this.article.image) {
      const uri = await FileConverter.arrayBufferToDataUri(this.article.image.data, this.article.image.mimeType);
      this.imageUri = this.domSanitizer.bypassSecurityTrustUrl(uri);
    } else {
      this.imageUri = null;
    }
  }
}
