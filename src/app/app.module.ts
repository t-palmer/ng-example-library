import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgExampleLibraryModule } from 'ng-example-library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgExampleLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
