import React, { useState } from 'react';
import Filter from '../Sections/Filter';
import HotelSearch from '../Sections/HotelSearch';
import TicketsSearch from '../Sections/TicketsSearch';

const Home = () => {
    const [departiata, setDepartIata] = useState(null);
    const [airiata, setAiriata] = useState(null);
    const [display, setDisplay] = useState(false);
    const [ready, setReady] = useState(false);

    return (
        <section onClick={() => setDisplay(false)}>
            <Filter setReady={setReady} setDepartIata={setDepartIata} setAiriata={setAiriata} />
            <TicketsSearch departiata={departiata} airiata={airiata} />
            {ready && (
                <HotelSearch />
            )}
        </section>
    )
}

export default Home