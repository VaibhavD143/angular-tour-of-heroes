import { Component, OnInit , Input } from '@angular/core';
import { Hero } from '../hero';
import { MessageService } from '../message.service';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  
  constructor(
    private messageService : MessageService,
    private heroService : HeroService,
    private route : ActivatedRoute,
    private location : Location,
    
  ) { }
  
  ngOnInit() {
    this.messageService.add("hero-detail componenet initiated!!");
    this.getHero();
    // alert("hero-detail componenet initiated!!");
  }

  getHero() : void{
    const id = this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(
      hero => this.hero = hero
    );
  }

  goBack():void{
    this.location.back();
  }
  @Input() hero:Hero;

}