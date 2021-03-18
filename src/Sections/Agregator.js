import React, { useState, useEffect } from 'react';

const Agregator = () => {

    useEffect(() => {
        const Fetch = async () => {
            //const response = await fetch(`http://engine.hotellook.com/api/v2/lookup.json?query=%D0%BC%D0%BE%D1%81%D0%BA%D0%B2%D0%B0&lang=ru&lookFor=hotel&limit=100`);
            //const result = await response.json();
        }
        Fetch()
    }, [])

    return (
        <section>

        </section>
    )
}

export default Agregator