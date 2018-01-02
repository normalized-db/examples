import { NdbDocument } from '@normalized-db/core';
import { DateEntity } from './base-entity';
import { Role } from './role';

export class User extends DateEntity implements NdbDocument {
  public userName: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public role: Role;
  public profileImage?: string;

  public readonly _refs?: {
    article: Set<string>,
    comment: Set<string>
  };
}
