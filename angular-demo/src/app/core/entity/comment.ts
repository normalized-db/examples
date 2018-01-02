import { NdbDocument } from '@normalized-db/core';
import { IdEntity } from './base-entity';
import { User } from './user';

export class Comment extends IdEntity implements NdbDocument {

  public readonly _refs?: { article: Set<string> };

  constructor(public text: string,
              public author: User) {
    super();

    this.text = text;
    this.author = author;
  }
}
