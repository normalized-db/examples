import { Injectable } from '@angular/core';
import { ToolbarButton } from '../toolbar/shared/model/toolbar-button';
import { ToolbarFilter } from '../toolbar/shared/model/toolbar-filter';
import { BehaviorArraySubject } from '../utility/observed-array';

@Injectable()
export class ToolbarService {

  public readonly filters: BehaviorArraySubject<ToolbarFilter> = new BehaviorArraySubject<ToolbarFilter>();
  public readonly buttons: BehaviorArraySubject<ToolbarButton> = new BehaviorArraySubject<ToolbarButton>();

  public clear() {
    this.filters.clear();
    this.buttons.clear();
  }
}
