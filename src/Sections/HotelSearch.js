import React, { useState, useEffect } from 'react';

const Agregator = () => {
    const user = {
        stay: {
          checkIn: "2021-06-15",
          checkOut: "2021-06-16"
        },
        occupancies: [
          {
            rooms: 1,
            adults: 2,
            children: 0
          }
        ],
        hotels: {
          hotel: [77, 168, 264, 265, 297, 311]
        }
      };
    useEffect(() => {
        const Fetch = async () => {
            const response = await fetch(
              "https://api.test.hotelbeds.com/hotel-api/1.0/hotels",
              {
                method: "POST",
                headers: {
                  'Accept': "application/json",
                  'Api-key':'a24cec1bb2a21edb8a831d5227ecb9c6',
                  "Accept-Encoding": "gzip",
                  "Content-Type": "json",
                },
                body: JSON.stringify(user)
              }
            );
            const result = await response.json();
            console.log(result);
          };
          Fetch();
    }, [])

    return (
        <section>

        </section>
    )
}

export default Agregator