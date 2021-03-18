import React, { useState } from 'react'
import Depart from '../Filter/Depart.js';
import Country from '../Filter/Country.js';
import Courort from '../Filter/Courort.js';
import Sletat from '../Filter/Sletat.js';
import Date from '../Filter/Date.js';
import Hotel from '../Filter/Hotel.js';

const Home = () => {
    const [departid, setDepartid] = useState(832);
    const [countryid, setCountryid] = useState(119);
    const [courort, setCourort] = useState('Белек');
    const [courortid, setCourortid] = useState(149);
    const [hotel, setHotel] = useState(null);
    const [hotelid, setHotelid] = useState(null);
    return (
        <section>
            <Depart setDepartid={setDepartid} />
            <Country departid={departid} setCountryid={setCountryid} />
            <Courort countryid={countryid} setCourort={setCourort} setCourortid={setCourortid} />
            <Date />
            <Hotel courort={courort} setHotel={setHotel} setHotelid={setHotelid} />
            
        </section>
    )
}

export default Home