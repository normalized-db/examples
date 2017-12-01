import { Injectable } from '@angular/core';
import { ToolbarButton } from '../toolbar/shared/model/toolbar-button';
import { ToolbarFilter } from '../toolbar/shared/model/toolbar-filter';
import { ObservedArray } from '../utility/observed-array';

@Injectable()
export class ToolbarService {

  public readonly filters: ObservedArray<ToolbarFilter> = new ObservedArray<ToolbarFilter>();
  public readonly buttons: ObservedArray<ToolbarButton> = new ObservedArray<ToolbarButton>();

  public clear() {
    this.filters.unset();
    this.buttons.unset();
  }
}
