import React, { useState, useEffect } from 'react'
import Aeroports from '../JSON/Aeroports.json';

const Depart = ({ setDepartid, style }) => {
    const [list, setList] = useState(null);
    const [airports, setAirports] = useState(JSON.parse(JSON.stringify(Aeroports)));
    const [search, setSearch] = useState('Москва');
    const [display, setDisplay] = useState(false);
    const [id, setId] = useState(null);
    const [iata, setDepartIata] = useState(null);
    const [visible, setVisible] = useState(false);
    const Text = () => {
        useEffect(() => {
            const Fetch = async () => {
                const response = await fetch('https://module.sletat.ru/Main.svc/GetDepartCities');
                const result = await response.json();
                setList(result.GetDepartCitiesResult.Data);
            }
            Fetch();
        }, [])
    }
    Text();

    const setAirport = async (name) => {
        const response = await fetch(`https://www.travelpayouts.com/widgets_suggest_params?q=${name} ${name}`);
        const result = await response.json();
        setDepartIata(result.origin.iata);
    }
    const Visibility = () => {
        setVisible(!visible);
        setDisplay(true);
    }
    return (
        <div>
            <p>Выберите город вылета:</p>
            <input type='text' className={style.filter_input} onChange={e => setSearch(e.target.value)} onClick={() => { setSearch(''); setDisplay(!display) }} placeholder='Выберите город вылета...' value={search}></input>
            {display && (<div className='filter_list'>
                {list?.filter((res) => {
                    if (search === '') {
                        return res
                    } else {
                        if (res.Name.toLowerCase().includes(search.toLowerCase())) {
                            return res
                        }
                    }
                }).map((res, key) => (
                    <div key={key}>
                        <p key={key} onClick={() => { setSearch(res.Name); setId(res.Id); setDepartid(res.Id); setAirport(res.Name); Visibility() }}>{res.Name}</p>
                        {visible && (airports.filter((result) => {
                            if (result.flightable === true && result.city_code === iata && result.iata_type === 'airport') {
                                return result
                            }
                        }).map((res, key) => (
                            <p>{res.name_translations.en}</p>
                        )))}
                    </div>
                ))}
            </div>
            )}
        </div>
    )
}

export default Depart
