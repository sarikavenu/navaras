import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideoDialogPage } from './video-dialog.page';

describe('VideoDialogPage', () => {
  let component: VideoDialogPage;
  let fixture: ComponentFixture<VideoDialogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoDialogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideoDialogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
