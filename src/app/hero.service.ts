import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from 'src/hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id == id)!;
    this.messageService.add(`we grabbed hero with id of ${id)`;
    return of(hero);
  }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('The HeroService fetched the Heroes')
    return heroes;
  }
}
