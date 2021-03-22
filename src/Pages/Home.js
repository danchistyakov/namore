import React, { useState } from 'react';
import Filter from '../Sections/Filter';
import TicketsSearch from '../Sections/TicketsSearch';

const Home = () => {
    const [departiata, setDepartIata] = useState(null);
    const [airiata, setAiriata] = useState(null);

    return (
        <section>
            <Filter setDepartIata={setDepartIata} setAiriata={setAiriata} />
            <TicketsSearch departiata={departiata} airiata={airiata} />
        </section>
    )
}

export default Home