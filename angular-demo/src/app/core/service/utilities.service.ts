import { Injectable } from '@angular/core';
import { MdSnackBar, MdSnackBarRef, SimpleSnackBar } from '@angular/material';

@Injectable()
export class UtilitiesService {

  constructor(private snackBar: MdSnackBar) {
  }

  public showSnackBar(message: string, action = 'OK', duration = 1000): MdSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, { duration: duration });
  }
}
