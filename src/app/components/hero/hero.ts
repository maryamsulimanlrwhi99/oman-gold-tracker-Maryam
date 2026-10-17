import { Component } from '@angular/core';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {

  constructor(public language: LanguageService) {}

}