import { ObservedProperty } from './observed-property';

export class ObservedArray<T> extends ObservedProperty<T[]> {

  constructor(defaultValue: T[] = []) {
    super(defaultValue);
  }

  public push(...item: T[]) {
    this.value.push(...item);
    this.next();
  }

  public remove(...items: T[]) {
    items.forEach(item => {
      const index = this.value.findIndex(otherItem => otherItem === item);
      if (index >= 0) {
        this.value.splice(index, 1);
        this.next();
      }
    });
  }

}
