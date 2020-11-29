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

const config: SocketIoConfig = { url: 'http://codenames.michelrinck.de/ws', options: {}};

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
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
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
