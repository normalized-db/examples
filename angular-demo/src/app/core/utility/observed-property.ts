import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { Property } from './property';

export class ObservedProperty<T> extends Property<T> {
  private readonly source = new Subject<Property<T>>();
  private readonly observable: Observable<Property<T>> = this.source.asObservable();

  constructor(defaultValue?: T) {
    super(defaultValue, () => {
      if (this && this.source) {
        this.next();
      }
    });
  }

  public next() {
    this.source.next(this);
  }

  public subscribe(next: (value: Property<T>) => void,
                   error?: (error: any) => void,
                   complete?: () => void): Subscription {
    return this.observable.subscribe(next, error, complete);
  }

  public subscribeAndTrigger(next: (value: Property<T>) => void,
                             error?: (error: any) => void,
                             complete?: () => void): Subscription {
    next(this);
    return this.observable.subscribe(next, error, complete);
  }

}
