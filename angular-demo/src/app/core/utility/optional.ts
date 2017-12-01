export class Optional<T> {

  public static empty<K>() {
    return new Optional<K>();
  }

  public static of<K>(value: K) {
    if (!value) {
      throw new Error('Values for a non-nullable optional must not be null');
    }

    return new Optional<K>(value);
  }

  public static ofNullable<K>(value: K) {
    return new Optional<K>(value);
  }

  private constructor(private _value: T = null) { }

  public get value() {
    return this._value as T;
  }

  public orElse(fallback: T = null): T {
    return (this._value || fallback) as T;
  }

  public get isPresent() {
    return this._value !== null;
  }

  public ifPresent(callback: (value: T) => void) {
    if (this.isPresent) {
      callback(this._value);
    }
  }

}
