import { IdEntity } from './base-entity';
import { User } from './user';

export class Comment extends IdEntity {
  constructor(public text: string,
              public author: User) {
    super();

    this.text = text;
    this.author = author;
  }
}
