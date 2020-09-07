import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { DataService, Movie } from "../services/data.service";
import { DetailsPage } from './details/details.page';
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
          if (this.movies) {
            var newList: Movie[] = (data as any).results;
            //if (newList.length < 25) {
            //  event.target.disabled = true;
            //}
            this.movies = this.movies.concat((data as any).results);
          } else {
            this.movies = (data as any).results;
          }
          this.nextpage = (data as any).next;
          console.log("next page in infinite scroll:"+this.nextpage);
        },
        err => {
          console.log(err);
        }
      );

    }, 500);
 
  }

  async showDetails(vMovie: Movie) {
    console.log("vImg:"+vMovie);
    const modal = await this.modalDialog.create({
      component: DetailsPage,
      componentProps: { movie: vMovie},
      cssClass: 'viewVideoModal'
    })
    return modal.present();
  }

}