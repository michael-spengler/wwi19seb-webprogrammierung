import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'example-angular-app';
  public ourList = ['Hugo', 'Fritz', 'Helga', 'Anton']
  public showList = false


  public alertSomething(): void {
    alert('hi studis')
    this.showList = true
  }
}
