import { Injectable } from '@angular/core';
import { TEXTS } from '../constants/texts';

export type Lang = 'fa' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private currentLang: Lang = (localStorage.getItem('lang') as Lang) || 'fa';

  get lang(): Lang {
    return this.currentLang;
  }

  get texts() {
    return TEXTS[this.currentLang];
  }

  toggle() {
    this.currentLang = this.currentLang === 'fa' ? 'en' : 'fa';
    localStorage.setItem('lang', this.currentLang);
  }
}
