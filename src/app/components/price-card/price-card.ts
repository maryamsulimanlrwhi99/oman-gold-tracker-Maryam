import { Component, Input } from '@angular/core';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-price-card',
  imports: [],
  templateUrl: './price-card.html',
  styleUrl: './price-card.css'
})
export class PriceCard {

  @Input() karat: string = '';

  @Input() price: number = 0;

  constructor(public language: LanguageService) {}
}