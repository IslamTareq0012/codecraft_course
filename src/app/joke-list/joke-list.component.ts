import { Component, OnInit, ViewChild, ViewChildren, QueryList, ContentChildren, ContentChild, AfterContentInit, AfterViewInit } from '@angular/core';
import { Joke } from '../../Models/joke';
import { JokeComponent } from '../joke/joke.component';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit, AfterContentInit, AfterViewInit {
  jokes: Joke[] = [];
  @ViewChild(JokeComponent) jokeViewChild: JokeComponent;
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
  @ContentChild(JokeComponent) jokeContentChild: JokeComponent;
  constructor() {
    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
    ];
    // console.log(`new - jokeViewChild is ${this.jokeViewChild}`);
  }
  ngOnInit() {
  }
  ngAfterContentInit() {
    // console.log(`ngAfterContentInit - jokeContentChild is ${this.jokeContentChild}`);
  }
  ngAfterViewInit() {
    // console.log(`ngAfterViewInit - jokeViewChild is ${this.jokeViewChild}`);
    let jokes: JokeComponent[] = this.jokeViewChildren.toArray();
    // console.log(jokes);
  }
  // addJoke(joke) {
  //   this.jokes.unshift(joke);
  // }
  addJoke() {
    this.jokes.unshift(new Joke("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"));
  }

  deleteJoke() {
    this.jokes = []
  }

}
