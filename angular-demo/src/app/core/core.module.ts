import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AppRootComponent } from './app-root/app-root.component';
import { ErrorModule } from './error/error.module';
import { AppRoutingModule } from './routing/app-routing.module';
import { DataStoreService } from './service/data-store.service';
import { LocalStorageService } from './service/local-storage.service';
import { ToolbarService } from './service/toolbar.service';
import { UtilitiesService } from './service/utilities.service';
import { ToolbarModule } from './toolbar/toolbar.module';
import './utility/rxjs-extensions';

@NgModule({
  imports: [
    AppRoutingModule,
    SharedModule,
    ErrorModule,
    ToolbarModule
  ],
  declarations: [
    AppRootComponent
  ],
  providers: [
    DataStoreService,
    ToolbarService,
    UtilitiesService,
    LocalStorageService
  ]
})
export class CoreModule {
}
