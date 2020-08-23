import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { DataService, Movie } from "../services/data.service";
import { VideoDialogPage } from '../pages/video-dialog/video-dialog.page';
import { ModalController } from "@ionic/angular";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  movies: Movie[];
  nextpage: string;

  //@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(private data: DataService, public modalDialog: ModalController) {}

  ngOnInit() {
    this.getList('');
  }

  getList(url: string) {
    this.data.getList(url).subscribe(
      data => {
        this.movies = (data as any).results;
        this.nextpage = (data as any).next;
        console.log(this.nextpage);
      },
      err => {
        console.log(err);
      }
    );  
  }

  search(event) {
    const query = event.target.value.toLowerCase();
    if(query.length > 1) {
      this.data.getList('search='+query).subscribe(
        data => {
          this.movies = (data as any).results;
        },
        err => {
          console.log(err);
        }
      );    
    }
  }

  refreshList(event) {
    console.log("Loading Next Data:"+this.nextpage + " for event:"+event);
    setTimeout(() => {
      event.target.complete();
      this.data.getList(this.nextpage).subscribe(
        data => {
          //this.movies = (data as any).results;
          this.movies.concat((data as any).results);
          this.nextpage = (data as any).next;
        },
        err => {
          console.log(err);
        }
      );
      if (this.movies.length < 10 ) {
        event.target.disabled = true;
      }
    }, 500);
 
  }

  async showVideo(vUrl: String, vTitle: String) {
    console.log("vUrl:"+vUrl);
    let url = vUrl.replace('/watch?v=','/embed/');
    console.log("url before show:"+url);
    const modal = await this.modalDialog.create({
      component: VideoDialogPage,
      componentProps: { url: url + '?autoplay=1&origin=http://navaras.com/', title: vTitle},
      cssClass: 'viewVideoModal'
    })
    return modal.present();
  }

}
