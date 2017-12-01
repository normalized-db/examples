import { NgModule } from '@angular/core';
import { UserLinkComponent } from 'app/user/shared/user-link/user-link.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    UserLinkComponent
  ],
  exports: [
    UserLinkComponent
  ]
})
export class UserSharedModule {
}
