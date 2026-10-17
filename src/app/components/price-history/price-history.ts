import { Component } from '@angular/core';

import { GOLD_HISTORY } from '../../data/gold-data';
import { LanguageService } from '../../services/language';


@Component({
  selector: 'app-price-history',
  imports: [],
  templateUrl: './price-history.html',
  styleUrl: './price-history.css'
})
export class PriceHistory {

  history = GOLD_HISTORY;

  constructor(public language: LanguageService) {}

}