import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CountDownComponent} from './count-down/count-down.component';
import {LeftZeroPadPipe} from '../shared/pipe/left-zero-pad.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WonderlandComponent } from './wonderland/wonderland.component';

@NgModule({
  declarations: [
    AppComponent,
    CountDownComponent,
    LeftZeroPadPipe,
    PageNotFoundComponent,
    WonderlandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
