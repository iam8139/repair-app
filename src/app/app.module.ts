import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { serverComponent } from './server/server.component';
import { ElectricalComponent } from './electrical/electrical.component';

@NgModule({
  declarations: [
    AppComponent,
    serverComponent,
    ElectricalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
