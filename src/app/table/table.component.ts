import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { GameService } from '../shared/game.service';
import { Game } from '../shared/types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  gamesId$: Observable<string>;
  game: Game;

  @ViewChildren(CardComponent) cards: QueryList<CardComponent>;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    const gameId = this.route.snapshot.paramMap.get('gameId');

    this.gameService.identification$.subscribe(data => {
      this.onIdentification(data);
    });

    this.gameService.getGame(gameId).subscribe(game => {
      if (game) {
        console.log(game);
        this.game = game;
        this.gameService.register(this.game.id);

        // needed to update the cards QueryList
        this.cd.detectChanges();

        this.onGameInit(game);
      } else {
        console.log('no game with id', gameId);
      }
    });
  }

  identify(codename: string) {
    const card = this.cards.find(c => c.codename === codename);
    if (!card.identity) {
      this.gameService.identify(this.game.id, codename);
    }
  }

  onIdentification(message: any) {
    console.log('identify', message);
    console.log(this.cards);
    const card = this.cards.find(c => c.codename === message.codename);
    console.log(card);
    if (card) {
      card.identity = message.identity;
    }
  }

  onGameInit(game: Game) {
    console.log('game initialized');
  }
}
