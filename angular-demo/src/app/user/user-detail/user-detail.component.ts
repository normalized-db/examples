import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { RefsUtility } from '@normalized-db/core';
import { ListResult } from '@normalized-db/data-store';
import { Subscription } from 'rxjs/Subscription';
import { Article } from '../../core/entity/article';
import { Comment } from '../../core/entity/comment';
import { User } from '../../core/entity/user';
import { DataStoreService } from '../../core/service/data-store.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {

  public user: User;
  public articles: ListResult<Article>;
  public comments: ListResult<Comment>;

  private routerSubscription: Subscription;
  private userName: string;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
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

  private reload() {
    if (!this.activatedRoute) {
      return;
    }

    this.activatedRoute.params.forEach(async (params: Params) => {
      this.userName = params['userName'];
      console.log('#user-detail: show user', this.userName);

      if (!this.userName) {
        this.user = null;
        return;
      }

      this.user = await this.dataStore.findByKey<User>('user', this.userName).result();
      if (this.user) {
        this.articles = await this.dataStore.find<Article>('article')
          .keys(RefsUtility.getAll(this.user, 'article'))
          .result();

        this.comments = await this.dataStore.find<Article>('comment')
          .keys(RefsUtility.getAll(this.user, 'comment'))
          .result();

      } else {
        this.articles = null;
        this.comments = null;
      }

      console.log('#user-detail: received', this.user, this.articles, this.comments);
    });
  }
}
