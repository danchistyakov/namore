import React, { useState } from 'react'
import Depart from '../Filter/Depart';
import Country from '../Filter/Country';
import Courort from '../Filter/Courort';
import Sletat from '../Filter/Sletat';
import Date from '../Filter/Date';
import Hotel from '../Filter/Hotel';
import Arrival from '../Filter/Arrival';

const Home = () => {
    const [departid, setDepartid] = useState(832);
    const [depart, setDepart] = useState('Москва');
    const [countryid, setCountryid] = useState(119);
    const [country, setCountry] = useState('Турция');
    const [courort, setCourort] = useState('Анталия');
    const [courortid, setCourortid] = useState(149);
    const [startdate, setStartdate] = useState(null);
    const [enddate, setEnddate] = useState(null);
    const [hotel, setHotel] = useState(null);
    const [hotelid, setHotelid] = useState(null);
    const [departiata, setDepartIata] = useState(null);
    const [countryiata, setCountryiata] = useState('TR');
    const [airiata, setAiriata] = useState(null);
    
    return (
        <section>
            <Depart setDepartid={setDepartid} setDepartIata={setDepartIata} />
            <Country departid={departid} setCountryid={setCountryid} setCountry={setCountry} setCountryiata={setCountryiata} />
            <Courort countryid={countryid} setCourort={setCourort} setCourortid={setCourortid} />
            <Date setStartdate={setStartdate} setEnddate={setEnddate} />
            <Hotel courort={courort} setHotel={setHotel} setHotelid={setHotelid} />
            <Arrival country={country} countryiata={countryiata} setAiriata={setAiriata} />
        </section>
    )
}

export default Home