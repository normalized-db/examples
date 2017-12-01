import { IdEntity } from './base-entity';
import { Comment } from './comment';
import { Image } from './image';
import { User } from './user';

export class Article extends IdEntity {
  title: string;
  text: string;
  createdDate: Date;
  author: User;
  comments?: Comment[];
  image?: Image;
}
