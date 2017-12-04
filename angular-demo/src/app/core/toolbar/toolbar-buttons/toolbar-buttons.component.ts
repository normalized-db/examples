import { Component, Input, OnInit } from '@angular/core';
import { ToolbarService } from '../../service/toolbar.service';
import { ToolbarButton } from '../shared/model/toolbar-button';

@Component({
  selector: 'app-toolbar-buttons',
  templateUrl: './toolbar-buttons.component.html',
  styleUrls: ['./toolbar-buttons.component.scss']
})
export class ToolbarButtonsComponent implements OnInit {

  @Input() public staticButtons: ToolbarButton[] = [];

  public buttons: ToolbarButton[] = [];

  constructor(private toolbarService: ToolbarService) {
  }

  public ngOnInit() {
    this.toolbarService.buttons.subscribe(actions => this.buttons = [...this.staticButtons, ...actions]);
  }
}
