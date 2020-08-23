import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoDialogPage } from './video-dialog.page';

const routes: Routes = [
  {
    path: '',
    component: VideoDialogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoDialogPageRoutingModule {}
