import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MarkerPageComponent } from './components/marker-page/marker-page.component';
import { CameraPageComponent } from './components/camera-page/camera-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MarkerPageComponent,
    CameraPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
