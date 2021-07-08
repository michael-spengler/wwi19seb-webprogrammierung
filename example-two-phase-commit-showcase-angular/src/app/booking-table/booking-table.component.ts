import { Component, OnInit } from '@angular/core' 
import { HttpClient } from '@angular/common/http'

export interface IOffer {
  roomNumber: number,
  rentalCarId: number,
  startDate: string,
  endDate: string
}

@Component({
  selector: 'app-booking-table',
  templateUrl: './booking-table.component.html',
  styleUrls: ['./booking-table.component.css']
})
export class BookingTableComponent implements OnInit {

  public offers: IOffer[] = [{ roomNumber: 1, rentalCarId: 10, startDate: "2021-08-01", endDate: "2021-08-08" }, { roomNumber: 2, rentalCarId: 20, startDate: "2021-08-11", endDate: "2021-08-18" }]
  public responseFromBackend = ""

  constructor(private http: HttpClient) { }

  public ngOnInit(): void {
  }

  public async bookOffer(offer: IOffer): Promise<void> {
    if (confirm(`Do you want to book room: ${offer.roomNumber} and rentalCarId: ${offer.rentalCarId}?`)) {

      this.http.get('http://localhost:3036/getISSPosition')
        .subscribe((data: any) => {
          console.log(data)
        })

      // assumption: booking successful
      this.responseFromBackend = `Booking Successful. Enjoy your Vacation. Your confirmation ID is: 4711.`
    }

    // assumption: booking not successful
  }

  public async reserveOffer(offer: IOffer): Promise<void> {
    if (confirm(`Do you want to reserve room: ${offer.roomNumber} and rentalCarId: ${offer.rentalCarId}?`)) {


      // this.http.get('http://localhost:3036/getISSPosition')
      //   .subscribe((data: any) => {
      //     console.log(data)
      //   })

      // assumption: booking successful
      this.responseFromBackend = `Reservation Successful. You can book until xyz... Your reservation ID is: whatever123.`

      // assumption: booking not successful
    }
  }

}
