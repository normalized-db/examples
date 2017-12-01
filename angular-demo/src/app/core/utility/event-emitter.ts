import { EventEmitter as NgEventEmitter } from '@angular/core';

export class EventEmitter<T> extends NgEventEmitter<T> {

  public get hasObservers(): boolean {
    return this.observers.length > 0;
  }

}
