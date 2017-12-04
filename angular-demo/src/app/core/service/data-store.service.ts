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
import { DenormalizerBuilder } from '@normalized-db/denormalizer';
import { NormalizerBuilder } from '@normalized-db/normalizer';
import { schemaConfig } from '../../../assets/data/schema';

export type Types = 'role' | 'user' | 'comment' | 'article';

@Injectable()
export class DataStoreService implements IDataStore<Types> {

  private static newKey(type: string): ValidKey {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  }

  private readonly schema: ISchema;
  private readonly dataStore: DataStore<Types>;

  constructor() {
    this.schema = new Schema(schemaConfig);
    this.dataStore = new DataStore(this.buildContext(), false);
  }

  public get types(): string[] {
    return this.schema.getTypes();
  }

  public count(type: Types): CountQuery {
    return this.dataStore.count(type);
  }

  public find<Result>(type: Types): Query<Result> {
    return this.dataStore.find<Result>(type);
  }

  public findByKey<Result>(type: Types, key: ValidKey): SingleItemQuery<Result> {
    return this.dataStore.findByKey<Result>(type, key);
  }

  public create<Item>(type: Types, item: Item | Item[], parent?: Parent): Promise<boolean> {
    return this.dataStore.create<Item>(type, item, parent);
  }

  public update<Item>(type: Types, item: Item | Item[]): Promise<boolean> {
    return this.dataStore.update<Item>(type, item);
  }

  public put<Item>(type: Types, item: Item | Item[], parent?: Parent): Promise<boolean> {
    return this.dataStore.put<Item>(type, item, parent);
  }

  public remove<Item>(type: Types, item: ValidKey | Item): Promise<boolean> {
    return this.dataStore.remove<Item>(type, item);
  }

  public clear(type?: string | string[]): Promise<boolean> {
    return this.dataStore.clear(type);
  }

  private buildContext(): Context {
    return new IdbContext(
      this.schema,
      new NormalizerBuilder()
        .schema(this.schema)
        .reverseReferences(true)
        .uniqueKeyCallback(DataStoreService.newKey),
      new DenormalizerBuilder().schema(this.schema),
      { name: 'ndb-demo', version: 1 }
    );
  }
}
