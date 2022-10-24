import { Injectable } from '@angular/core';
import { Hero } from './interfaces/heroeInterface';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
