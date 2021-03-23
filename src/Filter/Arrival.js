import React, { useState, useEffect } from 'react'
import Cities from '../JSON/Cities.json';
import Aeroports from '../JSON/Aeroports.json';

const Arrival = ({ country, countryiata, setAiriata, style }) => {

    const [search, setSearch] = useState('Анталия');
    const [display, setDisplay] = useState(false);
    const [arrcity, setArrcity] = useState(JSON.parse(JSON.stringify(Cities)));
    const [arrair, setArrair] = useState(JSON.parse(JSON.stringify(Aeroports)));
    const [cityiata, setCityiata] = useState(null);

    const setCity = async (name) => {
        const response = await fetch(`https://www.travelpayouts.com/widgets_suggest_params?q=${name} ${name}`);
        const result = await response.json();
        setCityiata(result.origin.iata);
    }
    return (
        <div>
            <p className={style.option_title}>Выберите аэропорт прибытия:</p>
            <input type='text' className={style.filter_input_location} onChange={e => setSearch(e.target.value)} onClick={() => { setSearch(''); setDisplay(!display) }} placeholder='Выберите аэропорт прибытия...' value={search} />
            {display && (<div className='filter_list'>
                {arrcity?.filter((res) => {
                    if (search === '' && res.country_code === countryiata) {
                        return res
                    } else {
                        if ((res.name.toLowerCase().includes(search.toLowerCase()) && res.country_code === countryiata) || (res.cases.pr.toLowerCase().includes(search.toLowerCase()) && res.country_code === countryiata)) {
                            return res
                        }
                    }
                }).map((res, key) => (
                    <div key={key}>
                        <p className={style.option_var} key={key} onClick={() => { setSearch(res.name); setCity(res.name); }}>Аэропорт в {res.cases.pr}</p>
                        {arrair.filter((res) => {
                            if (res.city_code === cityiata) {
                                console.log(res.name_translations.en);
                                return res;
                            }
                        }).map((res, key) => (
                            <p className={style.option_var} onClick={() => { setSearch(res.name_translations.en); setAiriata(res.code); }}>{res.name_translations.en}</p>
                        ))
                        }
                    </div>
                ))}
            </div>
            )}
        </div>
    )
}

export default Arrival
