import { NgModule } from '@angular/core';
import 'hammerjs';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './error.routing';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    routing,
    SharedModule
  ],
  declarations: [
    NotFoundComponent
  ]
})
export class ErrorModule {
}
