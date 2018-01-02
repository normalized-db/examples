import { NdbDocument } from '@normalized-db/core';
import { IdEntity } from './base-entity';

export class Role extends IdEntity implements NdbDocument {
  public label: string;

  public readonly _refs?: { user: Set<string> };
}
