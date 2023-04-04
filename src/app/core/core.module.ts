import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ngxsConfig } from '@config/ngxs.config';
import { routerConfig } from '@config/router.config';
import { CoreComponent } from '@core/components/core/core.component';
import { tuiProviders } from '@core/core-tui.providers';
import { WizbiiRouterStateSerializer } from '@core/serializer/router.serializer';
import { environment } from '@environment';
import { FeaturesModule } from '@features/features.module';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import {
  NgxsRouterPluginModule,
  RouterStateSerializer,
} from '@ngxs/router-plugin';
import { NgxsModule } from '@ngxs/store';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import {
  TuiButtonModule,
  TuiDialogModule,
  TuiRootModule,
  TuiSvgModule,
} from '@taiga-ui/core';
import { QuicklinkModule } from 'ngx-quicklink';
import { NgxScrollPositionRestorationModule } from 'ngx-scroll-position-restoration';

@NgModule({
  declarations: [CoreComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FeaturesModule,
    QuicklinkModule,
    HttpClientModule,
    RouterModule.forRoot([], routerConfig),
    NgxsModule.forRoot([], ngxsConfig),
    NgxsRouterPluginModule.forRoot(),
    NgxScrollPositionRestorationModule.forRoot(),
    ScrollToModule.forRoot(),
    TuiRootModule,
    TuiDialogModule,
    TuiSvgModule,
    TuiButtonModule,
    NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production }),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
    { provide: APP_BASE_HREF, useValue: '/' },
    ...tuiProviders,
    { provide: RouterStateSerializer, useClass: WizbiiRouterStateSerializer },
  ],
  bootstrap: [CoreComponent],
})
export class CoreModule {}
