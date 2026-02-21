import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-main',
  imports: [CardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {

}
