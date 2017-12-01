import { Injectable } from '@angular/core';
import { Optional } from '../utility/optional';

@Injectable()
export class LocalStorageService {

  public get length() {
    return localStorage.length;
  }

  public getItem<T>(key: string): Optional<T> {
    const value = localStorage.getItem(key);
    return Optional.ofNullable(value ? JSON.parse(value) as T : null);
  }

  public key<T>(index: number): Optional<string> {
    return Optional.ofNullable(localStorage.key(index));
  }

  public removeItem(key: string) {
    localStorage.removeItem(key);
  }

  public setItem<T>(key: string, item: T) {
    localStorage.setItem(key, JSON.stringify(item));
  }

  public clear() {
    localStorage.clear();
  }

}

