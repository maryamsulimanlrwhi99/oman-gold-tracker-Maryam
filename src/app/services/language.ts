import { Injectable, signal } from '@angular/core';

import {
  TRANSLATIONS,
  Language,
  TranslationKey
} from '../data/translations';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  currentLanguage = signal<Language>('en');

  toggleLanguage(): void {

    const newLanguage: Language =
      this.currentLanguage() === 'en' ? 'ar' : 'en';

    this.currentLanguage.set(newLanguage);

    document.documentElement.lang = newLanguage;
    document.documentElement.dir =
      newLanguage === 'ar' ? 'rtl' : 'ltr';
  }

  isArabic(): boolean {
    return this.currentLanguage() === 'ar';
  }

  t(key: TranslationKey): string {
    return TRANSLATIONS[this.currentLanguage()][key];
  }
}