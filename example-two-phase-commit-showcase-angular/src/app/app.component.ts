import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public onButtonClicked(userInput: string) {
    alert(`Aha - Jetzt weiß die Parent Component also, dass in der Child Component ${userInput} eingegeben wurde und der Button geklickt wurde.`)
  }

}
