import { Component, OnInit } from '@angular/core';
import { LanguagePopoverPage } from './../pages/language-popover/language-popover.page';
import { PopoverController, AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  params = {
    name: 'Simon'
  };

  constructor(private translate: TranslateService, private popoverCtrl: PopoverController, private alertCtrl: AlertController) { }

  
  async showAlert() {
    const alert = await this.alertCtrl.create({
      header: this.translate.instant('ALERT.header'),
      message: this.translate.instant('ALERT.msg'),
      buttons: ['OK']
    });
    alert.present();
  }
 
  async openLanguagePopover(ev) {
    const popover = await this.popoverCtrl.create({
      component: LanguagePopoverPage,
      event: ev
    });
    await popover.present();
  }
}
