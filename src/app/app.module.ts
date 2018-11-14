import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Routing
import { Routing } from './routes';
// Componenets
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FinancialComponent } from './components/financial/financial.component';
import { ScientificComponent } from './components/scientific/scientific.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { FutureValueHomeComponent } from './components/financial/components/future-value-home/future-value-home.component';
import { HomeLoanCalculatorComponent } from './components/financial/components/home-loan-calculator/home-loan-calculator.component';
import { FutureValueInvestmentComponent } from './components/financial/components/future-value-investment/future-value-investment.component';
import { LoanAmountComponent } from './components/financial/components/loan-amount/loan-amount.component';
import { HorsePowerComponent } from './components/scientific/components/horse-power/horse-power.component';
import { DistanceConvertComponent } from './components/scientific/components/distance-convert/distance-convert.component';
import { SpeedConvertComponent } from './components/scientific/components/speed-convert/speed-convert.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { CalendarComponent } from './components/calendar/calendar.component';

// Third party modules
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { jqxCalendarComponent  } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxcalendar';
import { jqxGaugeComponent  } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgauge';


@NgModule({
  declarations: [
    AppComponent,
    FinancialComponent,
    ScientificComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundPageComponent,
    FutureValueHomeComponent,
    HomeLoanCalculatorComponent,
    FutureValueInvestmentComponent,
    LoanAmountComponent,
    HorsePowerComponent,
    DistanceConvertComponent,
    SpeedConvertComponent,
    ContactFormComponent,
    CalendarComponent,
    jqxCalendarComponent,
    jqxGaugeComponent          
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    Routing,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
