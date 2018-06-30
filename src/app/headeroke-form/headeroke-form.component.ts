import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Joke } from '../../Models/joke';

@Component({
  selector: 'app-headeroke-form',
  templateUrl: './headeroke-form.component.html',
  styleUrls: ['./headeroke-form.component.css']
})
export class HeaderokeFormComponent implements OnInit {
  @Output() jokeCreated = new EventEmitter<Joke>();
  constructor() { }

  createJoke(setup: string, punchline: string) {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }
  ngOnInit() {
  }

}
