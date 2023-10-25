import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent {
  @Input() stepNumber = 0;
  @Input() fileUpdated = "";
  @Input() description = "";
  @Input() nextCheckout = "";


  endsWith(ending: string): boolean {
    return this.fileUpdated.endsWith(ending);
  }

}
