import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgHiddenComponent } from './ng-hidden/ng-hidden.component';

@NgModule({
  declarations: [
    AppComponent,
    NgHiddenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
