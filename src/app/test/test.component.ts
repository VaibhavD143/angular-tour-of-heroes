import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @ViewChild('box') box: ElementRef;
  there : string = "fromComponent";
  constructor() { }

  ngOnInit() {
  }

  keyPressed(data : string):void{
    console.log(data);
    console.warn(this.box.nativeElement.value);
  }

}