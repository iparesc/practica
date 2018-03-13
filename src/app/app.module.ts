import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { UnoComponent } from './uno/uno.component';
import { ServicioService } from './providers/servicio.service';


@NgModule({
  declarations: [
    AppComponent,
    UnoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ServicioService,
    HttpClientModule,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
