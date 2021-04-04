import React, { useState, useEffect } from 'react';

const HotelSearch = () => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const Fetch = async () => {
      const response = await fetch("http://engine.hotellook.com/api/v2/cache.json?location=Belek&currency=rub&adults=2&checkIn=2021-10-10&checkOut=2021-10-12&limit=10000000");
      const result = await response.json();
      console.log(result)
      setResult(result);
    };
    Fetch();
  }, [])

  return (
    <section>
      {result?.map(hotel => (
        <div>
          <p>{hotel.hotelName} {hotel.stars}*</p>
          <p>{hotel.priceAvg}</p>
        </div>
      ))}
    </section>
  )
}

export default HotelSearch