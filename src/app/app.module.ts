import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { FeatureComponent } from './components/feature/feature.component';
import { ProductComponent } from './components/product/product.component';
import { ButtonEffectDirective } from './directives/button-effect.directive';
import { CurrencyPipe } from './pipes/currency.pipe';
import { CutDescriptionPipe } from './pipes/cut-description.pipe';
import { PhoneFormatPipe } from './pipes/phone-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FeatureComponent,
    ProductComponent,
    ButtonEffectDirective,
    CurrencyPipe,
    CutDescriptionPipe,
    PhoneFormatPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
