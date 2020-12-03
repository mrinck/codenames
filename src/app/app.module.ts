import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { StartComponent } from './start/start.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpymasterComponent } from './spymaster/spymaster.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { environment } from '../environments/environment';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmIdentifyDialog } from './table/confirm-identify/confirm-identify-dialog.component';

const config: SocketIoConfig = {
  url: environment.websocketEndpoint,
  options: {}
};

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ConfirmIdentifyDialog,
    CardComponent,
    StartComponent,
    SpymasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
