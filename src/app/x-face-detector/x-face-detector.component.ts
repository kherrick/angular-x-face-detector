import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-x-face-detector',
  template: `
    <p>
      x-face-detector works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XFaceDetectorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
