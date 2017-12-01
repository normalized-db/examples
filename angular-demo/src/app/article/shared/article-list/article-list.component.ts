import { Component, Input } from '@angular/core';
import { ListResult } from '@normalized-db/data-store';
import { Article } from '../../../core/entity/article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent {

  @Input() public articles: ListResult<Article>;

}
