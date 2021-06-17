<script>

  let responseFromBackend = ""
  let offers = [
    { roomNumber: 1, rentalCarId: 10 },
    { roomNumber: 2, rentalCarId: 20 },
  ];

  function bookOffer(offer) {
    confirm(`Do you want to book room: ${offer.roomNumber} and rentalCarId: ${offer.rentalCarId}?`)

    // here comes the backend call
    // assumption: booking was successful
    responseFromBackend = `Booking Successful. Enjoy your Vacation. Your confirmation ID is: 4711.`

  }
</script>

<div id="bookingApp">
  <h1>Hey we're going to Ibiza</h1>

  <table class="center">
    <tr>
      <th> Room Number </th>
      <th> Rental Car ID </th>
      <th> Book </th>
    </tr>
    {#each offers as offer}
    
      <tr >
        <td>
          {offer.roomNumber}
        </td>
        <td>
          {offer.rentalCarId}
        </td>
        <td>
          <button on:click={() => bookOffer(offer)}>Book Now</button>
        </td>

        <tr />
      
      {/each}
   
  </table>

  <div id="response">
    {responseFromBackend}
  </div>


  <!-- <div id="response">
        {{responseFromBackend}}
      </div> -->
</div>

<style>
  #bookingApp {
    text-align: center;
  }

  #response {
    margin-top: 5vh;
  }

  table,
  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
  }

  table.center {
    margin-left: auto;
    margin-right: auto;
  }
</style>
