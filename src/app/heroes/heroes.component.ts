import { Component, OnInit } from '@angular/core';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers : [MessageService]
})
export class HeroesComponent implements OnInit {

  heroes : Hero[];
  selectedHero: Hero;

  constructor(private heroService : HeroService,public messageService : MessageService) {
   }
  
  ngOnInit() {
    this.getHeroes();
  }
  
  getHeroes():void{
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  
  onSelect(hero:Hero):void{
    this.messageService.add("Selections changed to :"+hero.name);
    alert("Selections changed to :"+hero.name);
    this.selectedHero = hero;
  }
}