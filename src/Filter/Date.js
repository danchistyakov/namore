import React, { useState, useEffect } from 'react';

const Date = ({ setStartdate, setEnddate }) => {

    useEffect(() => {
        const Fetch = async () => {
            //const response = await fetch('http://engine.hotellook.com/api/v2/lookup.json?query=%D0%BC%D0%BE%D1%81%D0%BA%D0%B2%D0%B0&lang=ru&lookFor=both&limit=1');
            //const result = await response.json();
            //console.log(result);
        }
        Fetch()
    })


    return (
        <div>
            <p>Дата вылета:</p>
            <input type="date" onChange={e => setStartdate(e.target.value)}></input>
            <p>Дата прилёта:</p>
            <input type="date" onChange={e => setEnddate(e.target.value)}></input>
        </div>
    )
}

export default Date