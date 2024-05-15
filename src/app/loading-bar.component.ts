import { Component, Input } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';

@Component({
  selector: 'loading-bar',
  standalone: true,
  imports: [MatProgressBar],
  template: `
    @if (visible) {
    <mat-progress-bar color="primary" mode="indeterminate"></mat-progress-bar>
    }
  `,
  styles: ``,
})
export class LoadingBarComponent {
  @Input() visible: Boolean = true;
}
