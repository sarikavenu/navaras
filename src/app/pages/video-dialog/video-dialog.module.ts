import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoDialogPageRoutingModule } from './video-dialog-routing.module';

import { VideoDialogPage } from './video-dialog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoDialogPageRoutingModule
  ],
  declarations: [VideoDialogPage]
})
export class VideoDialogPageModule {}
