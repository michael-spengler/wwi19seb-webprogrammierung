import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-our-special-supercharged-component',
  templateUrl: './our-special-supercharged-component.component.html',
  styleUrls: ['./our-special-supercharged-component.component.css']
})
export class OurSpecialSuperchargedComponentComponent {

  @Input() public ourFancyText = ""
  @Output() public buttonClicked = new EventEmitter<string>();

  public userInput: any

  public clickButton(): void {
    alert(`we'll inform the parent component right now that the user entered ${this.userInput} and clicked the button.`)
    this.buttonClicked.emit(this.userInput);
  }
}
