import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { DiagnosisCodeDetailsPageComponent } from './diagnosis-code-details-page/diagnosis-code-details-page.component';
import { SearchDiagnosisCodesPageComponent } from './search-diagnosis-codes-page/search-diagnosis-codes-page.component';
import { HeadComponent } from './head/head.component';

@NgModule({
  declarations: [
    AppComponent,
    DiagnosisCodeDetailsPageComponent,
    SearchDiagnosisCodesPageComponent,
    HeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
