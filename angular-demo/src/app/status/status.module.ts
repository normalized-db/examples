import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StatusModalComponent } from './status-modal/status-modal.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    StatusModalComponent
  ],
  entryComponents: [
    StatusModalComponent
  ]
})
export class StatusModule {
}
