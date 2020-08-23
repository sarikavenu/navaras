import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-video-dialog',
  templateUrl: './video-dialog.page.html',
  styleUrls: ['./video-dialog.page.scss'],
})
export class VideoDialogPage implements OnInit {

  public videourl;
  public vTitle;

  constructor(private activeRoute:ActivatedRoute,
    public modalCtrl:ModalController,
    public navParms:NavParams,
    public  sanitizer:DomSanitizer) {
      console.log(' this.navParms', this.navParms.data)
      console.log("this.navParms.data.url:"+this.navParms.data.url);
      this.videourl = this.navParms.data.url;
      this.vTitle = this.navParms.data.title;
      console.log(this.vTitle)
     }

  ngOnInit() {
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }  

}
