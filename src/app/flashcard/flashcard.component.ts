import { Component, OnInit } from '@angular/core';
import { Flashcard } from '../flashcard';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {
  flashcards:Flashcard [] = [
    new Flashcard(1, 'directive', 'classes that can add new behavior or modify structure of elements' ),
    new Flashcard(2, 'class', 'blueprint of an object'),
    new Flashcard(3, 'constructor', 'special function that creates and initializes an object instance'),
    new Flashcard(4, 'data binding', 'mechanism for coordinating parts of template with a component')

  ]
  viewDescription(index:number){
    this.flashcards[index].showDescription = !this.flashcards[index].showDescription

  }

  constructor() { }

  ngOnInit(): void {
  }

}
