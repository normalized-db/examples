import { NdbDocument } from '@normalized-db/core';
import { IdEntity } from './base-entity';
import { Comment } from './comment';
import { Image } from './image';
import { User } from './user';

export class Article extends IdEntity implements NdbDocument {

  public title: string;
  public text: string;
  public createdDate: Date;
  public author: User;
  public comments?: Comment[];
  public image?: Image;

  public readonly _refs?: {};
}
