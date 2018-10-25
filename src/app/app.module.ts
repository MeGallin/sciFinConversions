import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// Third party modules
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
// Routing
import { Routing } from './routes';
// Componenets
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FinancialComponent } from './components/financial/financial.component';
import { ScientificComponent } from './components/scientific/scientific.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';




@NgModule({
  declarations: [
    AppComponent,
    FinancialComponent,
    ScientificComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
