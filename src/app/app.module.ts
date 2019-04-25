import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgHiddenComponent } from './ng-hidden/ng-hidden.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { SafeTravseralComponent } from './safe-travseral/safe-travseral.component';
import { InputFormatterDirective } from './input-formatter.directive';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    NgHiddenComponent,
    NgSwitchComponent,
    NgForComponent,
    SafeTravseralComponent,
    InputFormatterDirective,
    CustomDirectiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
