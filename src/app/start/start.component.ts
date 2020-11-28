import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../shared/game.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(
    private gameService: GameService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  createGame() {
    this.gameService.createGame().pipe(take(1)).subscribe(gameId => {
      this.router.navigate([gameId]);
    });
  }

}
