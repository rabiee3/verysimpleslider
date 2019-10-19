import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {VerysimplesliderModule} from '../../projects/verysimpleslider/src/lib/verysimpleslider.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VerysimplesliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
