import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {Col1Component} from './card-space/col1/col1.component';
import {Col2Component} from './card-space/col2/col2.component';
import {Col3Component} from './card-space/col3/col3.component';
import { HeadersComponent } from './headers/headers.component';
import { CardComponent } from './card-space/card/card.component';
import { OddComponentComponent } from './game-controller/odd-component/odd-component.component';
import { EvenComponentComponent } from './game-controller/even-component/even-component.component';
import { IncrementorComponent } from './game-controller/incrementor/incrementor.component';
import { DropDownDirective } from './shared/drop-down.directive';
import { ActiveUserComponent } from './user-module/active-user/active-user.component';
import { InactiveUserComponent } from './user-module/inactive-user/inactive-user.component';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    Col1Component,
    Col2Component,
    Col3Component,
    HeadersComponent,
    CardComponent,
    OddComponentComponent,
    EvenComponentComponent,
    IncrementorComponent,
    DropDownDirective,
    ActiveUserComponent,
    InactiveUserComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
