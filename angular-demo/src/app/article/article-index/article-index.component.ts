import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  BaseEvent, CreatedEvent, ListResult, MapFunc, OnDataChanged, Query, ReducerFunc,
  RemovedEvent
} from '@normalized-db/data-store';
import { Article } from '../../core/entity/article';
import { DataStoreService, Types } from '../../core/service/data-store.service';
import { ToolbarService } from '../../core/service/toolbar.service';
import { ToolbarFilter } from '../../core/toolbar/shared/model/toolbar-filter';

@Component({
  selector: 'app-article-index',
  templateUrl: './article-index.component.html',
  styleUrls: ['./article-index.component.scss']
})
export class ArticleIndexComponent implements OnInit, OnDestroy, OnDataChanged {

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
    this.dataStore.eventPipe.register(this).type('article').build();
  }

  public ngOnDestroy() {
    this.toolbar.filters.remove(this.filter);
    this.dataStore.eventPipe.unregister(this);
  }

  public ndbOnDataChanged(event: BaseEvent<Types, Article>) {
    console.log('data changed', event);
    if (event.dataStoreType === 'article') {
      let changed = false;
      if (event instanceof CreatedEvent) {
        this.articles.push(event.item);
        changed = true;
      } else if (event instanceof RemovedEvent) {
        this.articles.remove(event.item);
        changed = true;
      }

      if (changed) {
        this.reloadFilter();
      }
    }
  }

  public async reload() {
    const articlesQuery = this.dataStore.find<Article>('article');
    this.articles = await articlesQuery.result();
    this.reloadFilter();

    console.log('#article-list: ', this.articles);

    this.testMap(articlesQuery);
    this.testReduce(articlesQuery);
    this.testMapReduce(articlesQuery);
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

  private async testMap(articlesQuery: Query<Article>) {
    const mapResult = await articlesQuery.map(async article => this.randomDelay(article.comments)).result();
    console.log('map', mapResult);
  }

  private async testReduce(articlesQuery: Query<Article>) {
    const reduceResult = await articlesQuery.reduce(async (accumulated, article) => {
      accumulated.push(...article.comments);
      return this.randomDelay(accumulated);
    }, []).result();
    console.log('reduce', reduceResult);
  }

  private async testMapReduce(articlesQuery: Query<Article>) {
    const mapFunc: MapFunc<Article, string[]> = article => {
      const authors = [article.author.userName];
      if (article.comments) {
        authors.push(...article.comments.map(c => c.author.userName));
      }
      return authors;
    };

    const reducerFunc: ReducerFunc<string[], Set<string>> = (accumulated, authors) => {
      authors.forEach(author => accumulated.add(author));
      return accumulated;
    };

    const mapReduceResult = await articlesQuery.map(mapFunc).reduce(reducerFunc, new Set<string>()).result();
    console.log('map-reduce', mapReduceResult);
  }

  private async randomDelay<Result>(result: Result): Promise<Result> {
    return new Promise<Result>(resolve =>
      setTimeout(() => resolve(result), Math.floor(Math.random() * 1000)));
  }
}
