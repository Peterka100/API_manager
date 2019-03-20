import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { BackendComponent } from './backend/backend.component';
import { AppRoutingModule, RoutingComponets } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BackendComponent,
    RoutingComponets
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
