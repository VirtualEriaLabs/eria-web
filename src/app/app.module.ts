import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CountDownComponent} from './count-down/count-down.component';
import {LeftZeroPadPipe} from '../shared/pipe/left-zero-pad.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CountDownComponent,
    LeftZeroPadPipe
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
