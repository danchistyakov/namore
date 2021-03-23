import React, { useState, useEffect } from 'react'
import Aeroports from '../JSON/Aeroports.json';
import Cities from '../JSON/Cities.json';

const Aeroport = ({ setArriata }) => {
    const [city, setCity] = useState(JSON.parse(JSON.stringify(Cities)))
    const [list, setList] = useState(JSON.parse(JSON.stringify(Aeroports)));
    const [search, setSearch] = useState('Анталия');
    const [display, setDisplay] = useState(false);
    const [airport, setAirport] = useState(null);

    {city?.filter((res) => {
        if (search == '') {
            return res
        } else {
            if (res.Name.toLowerCase().includes(search.toLowerCase())) {
                return res
            }
        }
    }).map((res, key) => (
        <div key={key}>
            <p key={key} onClick={() => { setChoice(res.name, res.Id); setCourortid(res.Id); setCourort(res.Name); }}>{res.Name}</p>
        </div>
    ))}

    const Fetch = () => {
        console.log(list.name)
    }

    const setChoice = (choice, code) => {
        setSearch(choice);
        setAirport(choice);
        setArriata(code)
        setDisplay(false);
    }
    return (
        <div>
            <p className={style.option_title}>Выберите аэропорт:</p>
            <input type='text' className={style.filter_input_location} onChange={e => setSearch(e.target.value)} onClick={() => { setSearch(''); setDisplay(true); Fetch() }} placeholder='Выберите страну прибытия...' value={search} />
            {display && (<div className='filter_list'>
                {list?.filter((res) => {
                    if (search == '') {
                        return res
                    } else {
                        if (res.name?.toLowerCase().includes(search.toLowerCase())) {
                            return res
                        }
                    }
                }).map((res, key) => (
                    <div key={key}>
                        <p className={style.option_var} key={key} onClick={() => { setChoice(res.name, res.code) }}>{res.name}</p>
                    </div>
                ))}
            </div>
            )}
        </div>
    )
}

export default Aeroport
