import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customers/customer.component';
import { CustomerComponentReactive } from './customers/customer.component_reactive';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerComponentReactive
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path : 'template', component :CustomerComponent},
      {path : 'reactiveForms', component :CustomerComponentReactive},
      {path : '', component :CustomerComponent}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
