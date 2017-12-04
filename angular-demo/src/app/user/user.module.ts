import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserIndexComponent } from './user-index/user-index.component';
import { UserListComponent } from './user-list/user-list.component';
import { routing } from './user.routing';

@NgModule({
  imports: [
    routing,
    SharedModule
  ],
  declarations: [
    UserIndexComponent,
    UserListComponent,
    UserDetailComponent
  ]
})
export class UserModule {
}
