import React, { useState } from 'react'

const Country = ({ departid, setCountryid, setCountry, setCountryiata, style }) => {
    const [list, setList] = useState(null);
    const [search, setSearch] = useState('Турция');
    const [display, setDisplay] = useState(false);
    const Fetch = async () => {
        const response = await fetch(`https://module.sletat.ru/Main.svc/GetCountries?townFromId=${departid}`);
        const result = await response.json();
        setList(result.GetCountriesResult.Data);
    }

    const Iata = async (name) => {
        const response = await fetch(`http://autocomplete.travelpayouts.com/places2?term=${name}&locale=ru&types[]=country`);
        const result = await response.json();
        setCountryiata(result[0]?.code)
    }

    const setChoice = (choice, id) => {
        setSearch(choice);
        setCountryid(id);
        setDisplay(false);
    }
    return (
        <section>
            <p>Выберите страну:</p>
            <input type='text' className={style.filter_input} onChange={e => setSearch(e.target.value)} onClick={() => { setSearch(''); setDisplay(!display); Fetch() }} placeholder='Выберите страну прибытия...' value={search} />
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
                        <p key={key} onClick={() => { setChoice(res.Name, res.Id); setCountry(res.Name); Iata(res.Name) }}>{res.Name}</p>
                    </div>
                ))}
            </div>
            )}
        </section>
    )
}

export default Country
