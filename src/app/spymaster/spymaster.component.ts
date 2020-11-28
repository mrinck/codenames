import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../shared/game.service';
import { Identity } from '../shared/types';

@Component({
  selector: 'app-spymaster',
  templateUrl: './spymaster.component.html',
  styleUrls: ['./spymaster.component.scss']
})
export class SpymasterComponent implements OnInit {

  identities: Identity[] = [];

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    const gameId = this.route.snapshot.paramMap.get('gameId');
    this.gameService.getIdentities(gameId).subscribe(identities => {
      this.identities = identities
    });
  }

}
