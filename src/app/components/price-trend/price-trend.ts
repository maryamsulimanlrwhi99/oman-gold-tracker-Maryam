import { Component } from '@angular/core';
import { GOLD_HISTORY } from '../../data/gold-data';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-price-trend',
  imports: [],
  templateUrl: './price-trend.html',
  styleUrl: './price-trend.css'
})
export class PriceTrend {

  history = GOLD_HISTORY;

  selectedKarat: '18K' | '21K' | '22K' | '24K' = '24K';

  constructor(public language: LanguageService) {}


  selectKarat(karat: '18K' | '21K' | '22K' | '24K'): void {
    this.selectedKarat = karat;
  }


  get prices(): number[] {

    return this.history.map(day => {

      switch (this.selectedKarat) {

        case '18K':
          return day.price18;

        case '21K':
          return day.price21;

        case '22K':
          return day.price22;

        case '24K':
          return day.price24;

      }

    });

  }


  get currentPrice(): number {
    return this.prices[this.prices.length - 1];
  }


  get previousPrice(): number {
    return this.prices[this.prices.length - 2];
  }


  get highestPrice(): number {
    return Math.max(...this.prices);
  }


  get lowestPrice(): number {
    return Math.min(...this.prices);
  }


  get priceChange(): number {
    return this.currentPrice - this.previousPrice;
  }


  get chartPoints(): string {

    const prices = this.prices;

    const width = 800;
    const height = 250;
    const padding = 20;

    const min = Math.min(...prices);
    const max = Math.max(...prices);

    const range = max - min || 1;

    return prices
      .map((price, index) => {

        const x =
          padding +
          (index / (prices.length - 1)) *
          (width - padding * 2);

        const y =
          height -
          padding -
          ((price - min) / range) *
          (height - padding * 2);

        return `${x},${y}`;

      })
      .join(' ');

  }

}