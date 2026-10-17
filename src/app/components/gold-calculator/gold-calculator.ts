import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { GOLD_PRICES } from '../../data/gold-data';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-gold-calculator',
  imports: [FormsModule],
  templateUrl: './gold-calculator.html',
  styleUrl: './gold-calculator.css'
})
export class GoldCalculator {

  goldPrices = GOLD_PRICES;

  selectedKarat: string = '24K';

  weight: number | null = null;

  result: number | null = null;

  constructor(public language: LanguageService) {}

  calculate(): void {

    const selectedGold = this.goldPrices.find(
      gold => gold.karat === this.selectedKarat
    );

    if (
      selectedGold &&
      this.weight !== null &&
      this.weight > 0
    ) {

      this.result =
        selectedGold.price * this.weight;

    } else {

      this.result = null;

    }
  }
}