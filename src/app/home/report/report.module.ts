import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

 import { IonicModule } from '@ionic/angular';

 import { ReportPageRoutingModule } from './report-routing.module';

 import { ReportPage } from './report.page';

 @NgModule({
   imports: [
     CommonModule,
     FormsModule,
     IonicModule,
     ReportPageRoutingModule,
     ReactiveFormsModule 
   ],
   declarations: [ReportPage]
 })
 export class ReportPageModule {}