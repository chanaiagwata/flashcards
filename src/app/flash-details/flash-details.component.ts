import { Component, Input, OnInit } from '@angular/core';
import { Flashcard } from '../flashcard';

@Component({
  selector: 'app-flash-details',
  templateUrl: './flash-details.component.html',
  styleUrls: ['./flash-details.component.css']
})
export class FlashDetailsComponent implements OnInit {
  @Input() flashcard!: Flashcard

  constructor() { }

  ngOnInit(): void {
  }

}
