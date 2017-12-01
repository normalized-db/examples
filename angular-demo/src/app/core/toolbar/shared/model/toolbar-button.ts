import { ToolbarItem } from './toolbar-item';

export abstract class ToolbarButton extends ToolbarItem {
  public icon?: string;
  public onClick: (ToolbarAction) => void;
}
