import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmptyListComponent } from './components/empty-list/empty-list.component';
import { EmptyComponent } from './components/empty/empty.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    EmptyListComponent,
    EmptyComponent,
    ImageUploadComponent
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule,
    EmptyListComponent,
    EmptyComponent
  ],
  entryComponents: [
    ImageUploadComponent
  ]
})
export class SharedModule {
}
