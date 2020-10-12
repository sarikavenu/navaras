import { Component, OnInit } from '@angular/core';
 import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
 import { ModalController, NavParams } from '@ionic/angular';
 import { Movie } from 'src/app/services/data.service';

 @Component({
   selector: 'app-report',
   templateUrl: './report.page.html',
   styleUrls: ['./report.page.scss'],
 })
 export class ReportPage implements OnInit {
   movie: Movie;
   reportForm: any;
   constructor(public modalCtrl:ModalController,
     public navParms:NavParams,
     public formBuilder: FormBuilder) {
     this.movie = this.navParms.data.movie;
    }

   ngOnInit() {
     this.reportForm = this.formBuilder.group({
        name: new FormControl('Dayana', Validators.required),
        country: new FormControl('Uruguay', Validators.required)
     });
   }
   dismiss(){
     this.modalCtrl.dismiss();
   }
   submit(){
     console.log('userform :',this.reportForm.value);
   }
 }