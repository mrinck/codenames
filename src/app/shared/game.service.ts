import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Game, Identity } from './types';
import { environment} from '../../environments/environment';

const HOST = environment.apiEndpoint;

@Injectable({
  providedIn: 'root'
})
export class GameService {
  identification$ = new Subject();

  constructor(
    private httpClient: HttpClient,
    private socket: Socket
  ) {
    this.socket.on('identify', data => {
      this.identification$.next(data);
    });
  }

  createGame(): Observable<string> {
    return this.httpClient.post<{ gameId: string }>(HOST + '/create', {}).pipe(map(response => response.gameId));
  }

  getGame(gameId: string): Observable<Game> {
    return this.httpClient.get<Game>(HOST + '/' + gameId);
  }

  getIdentities(gameId: string): Observable<Identity[]> {
    return this.httpClient.get<Identity[]>(HOST + '/' + gameId + '/identities');
  }

  register(gameId: string) {
    this.socket.emit('register', { gameId });
  }

  identify(gameId: string, codename: string) {
    this.socket.emit('identify', { gameId, codename })
  }
}
