import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

import { routes } from './app-routing.module';


import { NgxQRCodeModule } from 'ngx-qrcode2';
import { HttpModule } from '@angular/http';
import { QrCodeReader } from './qr-code-reader.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    routes,
    NgxQRCodeModule,
    HttpModule
  ],
  providers: [QrCodeReader],
  bootstrap: [AppComponent]
})
export class AppModule { }


