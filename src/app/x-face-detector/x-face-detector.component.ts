import 'x-face-detector';
import {
  ChangeDetectionStrategy,
  ElementRef,
  Component,
  ViewEncapsulation
} from '@angular/core';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-x-face-detector',
  template: `
    <div buttons>
      <button (click)="handleStartVideo()">start video</button>
      <button (click)="handleStopVideo()">stop video</button>
      <button (click)="handleStartPredictions()">start predictions</button>
      <button (click)="handleStopPredictions()">stop predictions</button>
    </div>
    <x-face-detector
      id="XFaceDetector"
      [attr.imgurl]="imgurl"
      [attr.wasmpath]="wasmpath"
      (x-face-detector-no-face-detected)="handleNoFaceDetected()"
      (x-face-detector-face-detected)="handleFaceDetected()"
      linewidth="5"
      strokestyle="blue"
    ></x-face-detector>
  `,
  styles: [`
    [buttons] {
      margin-bottom: 1rem;
    }
  `],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XFaceDetectorComponent {
  wasmpath = environment.xFaceDetector.wasmpath;
  imgurl = 'https://avatars3.githubusercontent.com/u/3065761';

  constructor(public element: ElementRef) {}

  getElementById(id) {
    return this.element.nativeElement.shadowRoot.getElementById(id);
  }

  handleStartVideo() {
    this.getElementById('XFaceDetector').startVideo();
  }

  handleStopVideo() {
    this.getElementById('XFaceDetector').stopVideo();
  }

  handleStartPredictions() {
    this.getElementById('XFaceDetector').startPredictions();
  }

  handleStopPredictions() {
    this.getElementById('XFaceDetector').stopPredictions();
  }

  handleNoFaceDetected = () => {
    console.log('NO face detected');
  }

  handleFaceDetected = () => {
    console.log('face detected');
  }
}
