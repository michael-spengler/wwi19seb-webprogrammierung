import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

export interface IOffer {
  roomNumber: number,
  rentalCarId: number,
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title = 'example-angular-app';
  public offers: IOffer[] = [{roomNumber: 1, rentalCarId: 10}, {roomNumber: 2, rentalCarId: 20}]
  public showList = false
  public responseFromBackend = ""

  public constructor(private http: HttpClient) {

  }

  public async bookOffer(offer: IOffer): Promise<void> {
    confirm(`Do you want to book room: ${offer.roomNumber} and rentalCarId: ${offer.rentalCarId}?`)

    this.http.get('http://localhost:3036/getISSPosition')
      .subscribe((data: any) => {
        console.log(data)
      })

      // assumption: booking successful
      this.responseFromBackend = `Booking Successful. Enjoy your Vacation. Your confirmation ID is: 4711.`

      // assumption: booking not successful

  }

}
