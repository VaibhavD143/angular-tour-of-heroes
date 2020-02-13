import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import {MessageService} from './message.service';
import { HeroesComponent } from './heroes/heroes.component';

@Injectable({
  // we declare that this service should be created
  // by the root application injector.
  providedIn: 'root'
})
export class HeroService {

  // constructor(private messageService: MessageService) { }
  constructor() { }

  // getHeroes() : Hero[]{
  //   return HEROES;
  // }

  getHeroes() : Observable<Hero[]>{
    // this.messageService.add("Heroes recived!!");
    return of(HEROES);
  }

}
