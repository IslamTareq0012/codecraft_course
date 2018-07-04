import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderokeFormComponent } from './headeroke-form/headeroke-form.component';
import { JokeComponent } from './joke/joke.component';
import { JokeListComponent } from './joke-list/joke-list.component';

import { CardHoverDirective } from '../Directives/cardHover';
@NgModule({
  declarations: [
    AppComponent,
    HeaderokeFormComponent,
    JokeComponent,
    JokeListComponent,
    CardHoverDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
