import { Optional } from './optional';

export class Property<T> {
  private _value: Optional<T> = Optional.empty<T>();

  constructor(defaultValue?: T, protected setter?: (item: T) => void) {
    this.value = defaultValue;
  }

  public get asOptional() {
    return this._value;
  }

  public get value() {
    return this._value.orElse();
  }

  public set value(item: T) {
    this._value = Optional.ofNullable(item);
    if (this.setter) {
      this.setter(item);
    }
  }

  public get isPresent() {
    return this._value.isPresent;
  }

  public ifPresent(callback: (value: T) => void) {
    return this._value.ifPresent(callback);
  }

  public unset() {
    this.value = null;
  }

}
