import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NowbarComponent } from './nowbar/nowbar.component';
import { FormsModule } from '@angular/forms';
import { UnderComponent } from './under/under.component';
import { FormfillComponent } from './nowbar/formfill/formfill.component';
@NgModule({
  declarations: [
    AppComponent,
    NowbarComponent,
    UnderComponent,
    FormfillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
