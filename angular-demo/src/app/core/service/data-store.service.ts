import { Injectable } from '@angular/core';
import { ISchema, NdbDocument, Schema, ValidKey } from '@normalized-db/core';
import {
  ClearOptions, Context, CountOptions, CountQuery, CreateOptions, DataStore, EventPipe, FindByKeyOptions,
  FindOptions, IDataStore, IdbContextBuilder, Logger, PutOptions, Query, RemoveOptions, SetOptions, SingleItemQuery,
  UpdateOptions
} from '@normalized-db/data-store';
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
    this._dataStore = new DataStore(this._context);
  }

  public get eventPipe(): EventPipe<Types> {
    return this._dataStore.eventPipe;
  }

  public get types(): string[] {
    return this._schema.getTypes();
  }

  public count<T>(type: Types, options?: CountOptions): CountQuery<T> {
    return this._dataStore.count(type, options);
  }

  public find<Result>(type: Types, options?: FindOptions): Query<Result> {
    return this._dataStore.find<Result>(type, options);
  }

  public findByKey<Result>(type: Types, key: ValidKey, options?: FindByKeyOptions): SingleItemQuery<Result> {
    return this._dataStore.findByKey<Result>(type, key, options);
  }

  public create<Item extends NdbDocument>(type: Types, item: Item | Item[], options?: CreateOptions): Promise<boolean> {
    return this._dataStore.create<Item>(type, item, options);
  }

  public update<Item extends NdbDocument>(type: Types, item: Item | Item[], options?: UpdateOptions): Promise<boolean> {
    return this._dataStore.update<Item>(type, item, options);
  }

  public set<Data extends object>(type: Types, id: ValidKey, item: Data, options?: SetOptions): Promise<boolean> {
    return this._dataStore.set<Data>(type, id, item, options);
  }

  public put<Item extends NdbDocument>(type: Types, item: Item | Item[], options?: PutOptions): Promise<boolean> {
    return this._dataStore.put<Item>(type, item, options);
  }

  public remove<Item extends NdbDocument>(type: Types,
                                          item: ValidKey | Item,
                                          options?: RemoveOptions): Promise<boolean> {
    return this._dataStore.remove<Item>(type, item, options);
  }

  public clear(type?: string | string[], options?: ClearOptions): Promise<boolean> {
    return this._dataStore.clear(type, options);
  }

  public logger(): Logger<Types, Context<Types>> {
    return this._context.logger();
  }

  private buildContext(): Context<Types> {
    const normalizerBuilder = new NormalizerBuilder()
      .schema(this._schema)
      .reverseReferences(true)
      .uniqueKeyCallback(DataStoreService.newKey);

    const denormalizerBuilder = new DenormalizerBuilder().schema(this._schema);

    return new IdbContextBuilder<Types>()
      .dbName('ndb-demo')
      .dbVersion(1)
      .schema(this._schema)
      .normalizerBuilder(normalizerBuilder)
      .denormalizerBuilder(denormalizerBuilder)
      .enableLogging(true)
      .build();
  }
}
