import { Component, OnInit , Input } from '@angular/core';
import { Hero } from '../hero';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  
  constructor(private messageService : MessageService) { }
  
  ngOnInit() {
    this.messageService.add("hero-detail componenet initiated!!");
    // alert("hero-detail componenet initiated!!");
  }
  @Input() hero:Hero;

}
