import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class BehaviorArraySubject<T> extends BehaviorSubject<T[]> {

  constructor(defaultValue: T[] = []) {
    super(defaultValue);
  }

  public push(...item: T[]) {
    this.value.push(...item);
    this.next(this.value);
  }

  public remove(...items: T[]) {
    items.forEach(item => {
      const index = this.value.findIndex(otherItem => otherItem === item);
      if (index >= 0) {
        this.value.splice(index, 1);
        this.next(this.value);
      }
    });
  }

  public clear() {
    this.next([]);
  }
}
