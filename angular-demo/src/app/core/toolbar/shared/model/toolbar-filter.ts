import { ToolbarItem } from './toolbar-item';

export class ToolbarFilter extends ToolbarItem {
  public value?: any;
  public options: {label: string, value: any}[];
  public onChanged: (ToolbarFilter) => void;
  public multiple = false;
}
