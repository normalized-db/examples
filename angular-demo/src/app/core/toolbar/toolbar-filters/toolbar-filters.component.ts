import { Component, Input, OnInit } from '@angular/core';
import { ToolbarService } from '../../service/toolbar.service';
import { ToolbarFilter } from '../shared/model/toolbar-filter';

@Component({
  selector: 'app-toolbar-filters',
  templateUrl: './toolbar-filters.component.html',
  styleUrls: ['./toolbar-filters.component.scss']
})
export class ToolbarFiltersComponent implements OnInit {

  @Input() public staticFilters: ToolbarFilter[] = [];

  public filters: ToolbarFilter[] = [];

  constructor(private toolbarService: ToolbarService) {
  }

  ngOnInit() {
    this.toolbarService.filters.subscribeAndTrigger(
      filters => this.filters = [...this.staticFilters, ...filters.value]
    );
  }

}
