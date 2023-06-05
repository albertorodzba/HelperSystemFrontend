import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { ApplicantModule } from './modules/applicant/applicant.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    

    CoreModule
  ],
  providers: [/*{provide: LocationStrategy, useClass: HashLocationStrategy}*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
