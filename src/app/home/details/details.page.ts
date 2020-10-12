import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import {DomSanitizer} from '@angular/platform-browser';
import { Movie } from "../../services/data.service";
import { VideoDialogPage } from "../../pages/video-dialog/video-dialog.page";
import { formatDate } from '@angular/common';
import { AppAvailability } from '@ionic-native/app-availability/ngx';
import { InAppBrowser, InAppBrowserObject } from '@ionic-native/in-app-browser/ngx';
import { Platform } from '@ionic/angular';
import { ReportPage} from '../report/report.page';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  providers: [InAppBrowser, AppAvailability],
})
export class DetailsPage implements OnInit {

  movie: Movie;
  isPlayLink: any;
  playLinkText: any;

  constructor(private activeRoute:ActivatedRoute,
    public modalCtrl:ModalController,
    public navParms:NavParams,
    public platform: Platform,
    private appAvailability: AppAvailability,
    private inAppBrowser: InAppBrowser,
    public  sanitizer:DomSanitizer, public modalDialog: ModalController) {
      this.movie = this.navParms.data.movie;
      console.log('movie :',this.movie);
      if(this.movie.playLink !=null){
        this.playLinkText="Let's Watch";
        this.isPlayLink=false;
      }
      else
      {
        this.playLinkText="Coming Soon";
        this.isPlayLink=true;
      }
    }

    openYoutube(video) {
      let app;
  
      if (this.platform.is('ios')) {
        app = 'youtube://';
      } else if (this.platform.is('android')) {
        app = 'com.google.android.youtube';
      } else {
        const browser: InAppBrowserObject = this.inAppBrowser.create(video, '_system');
        return;
      }
  
      this.appAvailability.check(app)
        .then(
          (yes: boolean) => {
            console.log(app + ' is available')
            // Success
            // App exists
            const browser: InAppBrowserObject = this.inAppBrowser.create(video, '_system');
          },
          (no: boolean) => {
            // Error
            // App does not exist
            // Open Web URL
            const browser: InAppBrowserObject = this.inAppBrowser.create(video, '_system');
          }
        );
    }
  ngOnInit() {
  }

  async showVideo(vUrl: String, vTitle: String) {
    this.modalCtrl.dismiss();
    let url = vUrl.replace('/watch?v=','/embed/');
    const modal = await this.modalDialog.create({
      component: VideoDialogPage,
      componentProps: { url: url + '?autoplay=1&origin=http://navaras.com/', title: vTitle},
      cssClass: 'viewVideoModal'
    })
    return modal.present();
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }
  async onreportclick(obj:any){
    console.log("vImg:"+obj);
    const modal = await this.modalDialog.create({
      component: ReportPage,
      componentProps: { movie: obj},
      cssClass: 'viewVideoModal'
    })
    return modal.present();
  }
}