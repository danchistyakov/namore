import React, { useState, useEffect } from 'react';

const Sletat = ({ countryid, courortid }) => {
    useEffect(() => {
        const Fetch = async () => {
            //const response = await fetch(`https://module.sletat.ru/Main.svc/GetHotels?countryId=${countryid}&towns=${courortid}&stars=404&filter=&all=-1`)
            //console.log(response)
        }
        Fetch()
    },[])
    return (
        <section></section>
    )
}

export default Sletat