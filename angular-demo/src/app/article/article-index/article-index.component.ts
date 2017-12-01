import { Component, OnDestroy, OnInit } from '@angular/core';
import { ListResult } from '@normalized-db/data-store';
import { Article } from '../../core/entity/article';
import { DataStoreService } from '../../core/service/data-store.service';
import { ToolbarService } from '../../core/service/toolbar.service';
import { ToolbarFilter } from '../../core/toolbar/shared/model/toolbar-filter';

@Component({
  selector: 'app-article-index',
  templateUrl: './article-index.component.html',
  styleUrls: ['./article-index.component.scss']
})
export class ArticleIndexComponent implements OnInit, OnDestroy {

  public articles: ListResult<Article>;

  private readonly filter: ToolbarFilter = {
    id: 'selectArticles',
    label: 'Select articles',
    multiple: true,
    options: [],
    onChanged: filter => this.onFiltered(filter)
  };

  constructor(private toolbar: ToolbarService,
              private dataStore: DataStoreService) {
    this.onChanged = this.onChanged.bind(this);
  }

  public async ngOnInit() {
    this.toolbar.filters.push(this.filter);
    await this.reload();
  }

  public ngOnDestroy() {
    this.toolbar.filters.remove(this.filter);
  }

  public async reload() {
    this.articles = await this.dataStore.find<Article>('article').result();
    this.reloadFilter();

    console.log('#article-list: ', this.articles);
  }

  public async remove(article: Article) {
    console.log('#article-list: remove', article.id);
    await this.dataStore.remove('article', article.id);
    await this.reload();
  }

  private reloadFilter() {
    this.filter.value = [];
    this.filter.options = [];
    this.articles.items.forEach(article => {
      this.filter.options.push({
        label: article.title,
        value: article.id
      });
      this.filter.value.push(article.id);
    });
  }

  private async onChanged(r) {
    if (r.type === 'article') {
      console.log('#article-list: articles changed', r);
      await this.reload();
    }
  }

  private async onFiltered(filter: ToolbarFilter) {
    if (filter === this.filter) {
      console.log('#article-list: articles filtered', filter.value);
      this.articles = await this.dataStore.find<Article>('article')
        .keys(filter.value)
        .result();
    }
  }
}
