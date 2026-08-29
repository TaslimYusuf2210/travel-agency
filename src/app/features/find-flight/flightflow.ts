import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-flightflow',
  imports: [RouterOutlet],
  templateUrl: './flightflow.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Flightflow {}
