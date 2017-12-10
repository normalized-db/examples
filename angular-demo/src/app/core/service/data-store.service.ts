import { Injectable } from '@angular/core';
import { ISchema, Schema, ValidKey } from '@normalized-db/core';
import {
  Context,
  CountQuery,
  DataStore,
  IDataStore,
  IdbContext,
  Parent,
  Query,
  SingleItemQuery
} from '@normalized-db/data-store';
import { EventPipe } from '@normalized-db/data-store/lib/src/event/utility/event-pipe';
import { LogQuery } from '@normalized-db/data-store/lib/src/logging/query/log-query';
import { DenormalizerBuilder } from '@normalized-db/denormalizer';
import { NormalizerBuilder } from '@normalized-db/normalizer';
import { schemaConfig } from '../../../assets/data/schema';

export type Types = 'role' | 'user' | 'comment' | 'article';

@Injectable()
export class DataStoreService implements IDataStore<Types> {

  private static newKey(type: string): ValidKey {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  }

  private readonly _schema: ISchema;
  private readonly _context: Context<Types>;
  private readonly _dataStore: DataStore<Types>;

  constructor() {
    this._schema = new Schema(schemaConfig);

    this._context = this.buildContext();
    this._context.logger().enable();

    this._dataStore = new DataStore(this._context, false);
  }

  public get eventPipe(): EventPipe<Types> {
    return this._dataStore.eventPipe;
  }

  public get types(): string[] {
    return this._schema.getTypes();
  }

  public count(type: Types): CountQuery {
    return this._dataStore.count(type);
  }

  public find<Result>(type: Types): Query<Result> {
    return this._dataStore.find<Result>(type);
  }

  public findByKey<Result>(type: Types, key: ValidKey): SingleItemQuery<Result> {
    return this._dataStore.findByKey<Result>(type, key);
  }

  public create<Item>(type: Types, item: Item | Item[], parent?: Parent): Promise<boolean> {
    return this._dataStore.create<Item>(type, item, parent);
  }

  public update<Item>(type: Types, item: Item | Item[]): Promise<boolean> {
    return this._dataStore.update<Item>(type, item);
  }

  public put<Item>(type: Types, item: Item | Item[], parent?: Parent): Promise<boolean> {
    return this._dataStore.put<Item>(type, item, parent);
  }

  public remove<Item>(type: Types, item: ValidKey | Item): Promise<boolean> {
    return this._dataStore.remove<Item>(type, item);
  }

  public clear(type?: string | string[]): Promise<boolean> {
    return this._dataStore.clear(type);
  }

  public logs(): LogQuery<Types> {
    return this._context.logger().logs();
  }

  private buildContext(): Context<Types> {
    return new IdbContext<Types>(
      this._schema,
      new NormalizerBuilder()
        .schema(this._schema)
        .reverseReferences(true)
        .uniqueKeyCallback(DataStoreService.newKey),
      new DenormalizerBuilder().schema(this._schema),
      { name: 'ndb-demo', version: 1 }
    );
  }
}
