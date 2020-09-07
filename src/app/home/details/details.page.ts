import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import {DomSanitizer} from '@angular/platform-browser';
import { Movie } from "../../services/data.service";
import { VideoDialogPage } from "../../pages/video-dialog/video-dialog.page";
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  movie: Movie;

  constructor(private activeRoute:ActivatedRoute,
    public modalCtrl:ModalController,
    public navParms:NavParams,
    public  sanitizer:DomSanitizer, public modalDialog: ModalController) {
      this.movie = this.navParms.data.movie;
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

}
