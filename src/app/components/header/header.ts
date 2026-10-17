import { Component } from '@angular/core';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  isDarkMode = false;

  constructor(public language: LanguageService) {}


  toggleDarkMode(): void {

    this.isDarkMode = !this.isDarkMode;

    document.documentElement.classList.toggle(
      'dark',
      this.isDarkMode
    );

  }


  toggleLanguage(): void {
    this.language.toggleLanguage();
  }

}