import { Component } from '@angular/core';

import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { PriceCard } from './components/price-card/price-card';
import { GoldCalculator } from './components/gold-calculator/gold-calculator';
import { PriceTrend } from './components/price-trend/price-trend';
import { PriceHistory } from './components/price-history/price-history';
import { Footer } from './components/footer/footer';

import { GOLD_PRICES } from './data/gold-data';
import { LanguageService } from './services/language';

@Component({
  selector: 'app-root',

  imports: [
    Header,
    Hero,
    PriceCard,
    GoldCalculator,
    PriceTrend,
    PriceHistory,
    Footer
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  goldPrices = GOLD_PRICES;

  constructor(public language: LanguageService) {}
}