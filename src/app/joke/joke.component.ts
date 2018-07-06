import { Component, OnInit, Input } from '@angular/core';
import { Joke } from '../../Models/joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  @Input() joke: Joke;
  constructor() {
  }

  // ngOnChanges() {
  //   console.log(`ngOnChanges - data is ${this.joke}`);
  // }

  ngOnInit() {
    // console.log(`ngOnInit  - data is ${this.joke}`);
  }


  // ngDoCheck() {
  //   console.log("ngDoCheck")
  // }

  // ngAfterContentInit() {
  //   console.log("ngAfterContentInit");
  // }

  // ngAfterContentChecked() {
  //   console.log("ngAfterContentChecked");
  // }

  // ngAfterViewInit() {
  //   console.log("ngAfterViewInit");
  // }

  // ngAfterViewChecked() {
  //   console.log("ngAfterViewChecked");
  // }

  // ngOnDestroy() {
  //   console.log("ngOnDestroy");
  // }

}
