import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Identity } from '../shared/types';

const IDENTITIES: Identity[] = [
  { type: 'bystander', gender: 'female' },
  { type: 'red', gender: 'female' },
  { type: 'blue', gender: 'female' },
  { type: 'bystander', gender: 'male' },
  { type: 'red', gender: 'male' },
  { type: 'blue', gender: 'male' },
  { type: 'assassin'}
];

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  host: {
    '[class.flipped]': 'identity != null' 
  }
})
export class CardComponent implements OnInit {

  @Input() codename: string;
  @Input() identity: Identity;


  constructor(
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
  }
}
