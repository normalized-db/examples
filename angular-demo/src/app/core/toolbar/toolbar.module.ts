import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { StatusModule } from '../../status/status.module';
import { ToolbarFilterPipe } from './shared/pipe/toolbar-filter.pipe';
import { ToolbarButtonsComponent } from './toolbar-buttons/toolbar-buttons.component';
import { ToolbarFiltersComponent } from './toolbar-filters/toolbar-filters.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    SharedModule,
    StatusModule
  ],
  declarations: [
    ToolbarComponent,
    ToolbarFiltersComponent,
    ToolbarFilterPipe,
    ToolbarButtonsComponent
  ],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarModule {
}
