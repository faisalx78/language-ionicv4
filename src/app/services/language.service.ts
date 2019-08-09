import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const LNG_KEY = 'SELECTED_LANGUAGE';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  selected = '';

  constructor(private translate: TranslateService, private storage: Storage) { }

  setInitialAppLanguage() {
    let language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);

    this.storage.get(LNG_KEY).then(val => {
      if (val) {
        this.setLanguage(val);
        this.selected = val;
      }
    });
  }

  getLanguages() {
    return [
      { text: 'العربية', value: 'ar', img: 'assets/imgs/ar.png'},
      { text: 'English', value: 'en', img: 'assets/imgs/en.png'},
      { text: 'français', value: 'en', img: 'assets/imgs/fr.png'},
      { text: '中國', value: 'en', img: 'assets/imgs/cn.png'},
      { text: 'Espanol', value: 'en', img: 'assets/imgs/es.png'},
      { text: 'اُردُو', value: 'en', img: 'assets/imgs/pk.png'},
      { text: 'فارسی', value: 'en', img: 'assets/imgs/ir.png'},
      { text: 'भारतीय', value: 'en', img: 'assets/imgs/in.png'},
    ];
  }

  setLanguage(lng) {
    this.translate.use(lng);
    this.selected = lng;
    this.storage.set(LNG_KEY, lng);
  }
}