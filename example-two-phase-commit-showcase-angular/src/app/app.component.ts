import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

export interface IRoom {
  roomNumber: number,
  roomBookings: IRoomBooking[]
}

export interface IRoomBooking {
  visitorName: string,
  fromDate: Date,
  toDate: Date
}

export interface IOffer {
  roomNumber: number,
  flightNumber: number,
  priceInEuro: number
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title = 'example-angular-app';
  public offers: IOffer[] = [{roomNumber: 1, flightNumber: 10, priceInEuro: 100}, {roomNumber: 2, flightNumber: 20, priceInEuro: 150}]
  // public hotelRooms: IRoom[] = [{ roomNumber: 1, roomBookings: [] }, { roomNumber: 2, roomBookings: [] }, { roomNumber: 3, roomBookings: [] }, { roomNumber: 4, roomBookings: [] }]
  // public flightsToIbiza = ['202210701', '202210702', '202210703', '202210704']
  public showList = false

  public constructor(private http: HttpClient) {

  }

  public alertSomething(): void {
    alert('hi studis')
    this.showList = true
  }


  public async bookOffer(offer: IOffer): Promise<void> {
    confirm(`Do you want to book room: ${offer.roomNumber} and flight: ${offer.flightNumber}?`)

    this.http.get('http://localhost:3036/getISSPosition')
      .subscribe((data: any) => {
        console.log(data)
      })
  }

  public async bookRoom(room: IRoom): Promise<void> {

    // quick and dirty intentionally as preparations... 
    alert(`ok enjoy your room: ${room.roomNumber}`)

    this.http.get('http://localhost:3036/getISSPosition')
      .subscribe((data: any) => {
        console.log(data)
      })

  }

  public bookFlight(flightDate: string): void {

    alert(`ok enjoy your flight: ${flightDate}`)

  }
}
