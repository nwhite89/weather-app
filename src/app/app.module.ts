import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
