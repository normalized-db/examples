import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserIndexComponent } from './user-index/user-index.component';

const routes: Routes = [
  {
    path: '',
    component: UserIndexComponent
  },
  {
    path: ':userName',
    component: UserDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
