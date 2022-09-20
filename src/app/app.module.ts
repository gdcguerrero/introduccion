import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { FirstModuleModule } from './modules/first-module/first.module';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
