// Step 1 - Add the Input to the imports
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  // Step 2 - Here are the three variables we added. Two are strings and one is a number.
  @Input() name = "Bob Ross";
  @Input() phone = "555-555-5555";
  @Input() rating = 5;

}
