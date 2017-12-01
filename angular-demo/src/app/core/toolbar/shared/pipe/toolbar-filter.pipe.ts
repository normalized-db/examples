import { Pipe, PipeTransform } from '@angular/core';
import { ToolbarFilter } from '../model/toolbar-filter';

@Pipe({
  name: 'toolbarFilter',
  pure: false
})
export class ToolbarFilterPipe implements PipeTransform {

  public transform(items: ToolbarFilter[]): any {
    return items.filter(item => item.options.length > 0);
  }
}
