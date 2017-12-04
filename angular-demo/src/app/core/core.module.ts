import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AppRootComponent } from './app-root/app-root.component';
import { ErrorModule } from './error/error.module';
import { AppRoutingModule } from './routing/app-routing.module';
import { DataStoreService } from './service/data-store.service';
import { ToolbarService } from './service/toolbar.service';
import { UtilitiesService } from './service/utilities.service';
import { ToolbarModule } from './toolbar/toolbar.module';
import './utility/rxjs-extensions';

const providers = [
  DataStoreService,
  ToolbarService,
  UtilitiesService
];

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
  providers: providers
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: providers
    };
  }
}
