import { NgModule } from '@angular/core';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdDatepickerModule,
  MdDialogModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  NoConflictStyleCompatibilityMode
} from '@angular/material';

const modules = [
  NoConflictStyleCompatibilityMode,

  // Form Controls
  MdAutocompleteModule,
  MdCheckboxModule,
  MdDatepickerModule,
  MdInputModule,
  MdRadioModule,
  MdSelectModule,
  MdSliderModule,
  MdSlideToggleModule,

  // Navigation
  MdMenuModule,
  MdSidenavModule,
  MdToolbarModule,

  // Layout
  MdListModule,
  MdGridListModule,
  MdCardModule,
  MdTabsModule,

  // Buttons, Indicators & Icons
  MdButtonModule,
  MdButtonToggleModule,
  MdChipsModule,
  MdIconModule,
  MdProgressSpinnerModule,
  MdProgressBarModule,

  // Popups, Modals
  MdDialogModule,
  MdTooltipModule,
  MdSnackBarModule,

  // Data table
  MdTableModule,
  MdSortModule,
  MdPaginatorModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule {
}
