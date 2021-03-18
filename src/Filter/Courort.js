import React, { useState } from 'react'

const Courort = ({ countryid, setCourortid, setCourort }) => {
    const [list, setList] = useState(null);
    const [search, setSearch] = useState('Белек');
    const [display, setDisplay] = useState(false);

    const Fetch = async () => {
        const response = await fetch(`https://module.sletat.ru/Main.svc/GetCities?countryId=${countryid}`);
        const result = await response.json();
        setList(result.GetCitiesResult.Data);
    }

    const setChoice = (choice, id) => {
        setSearch(choice);
        setCourortid(id);
        setDisplay(false);
    }
    return (
        <section>
            <p>Выберите курорт:</p>
            <input type='text' onChange={e => setSearch(e.target.value)} onClick={() => { setSearch(''); setDisplay(!display); Fetch() }} placeholder='Выберите курорт...' value={search} />
            {display && (<div>
                {list?.filter((res) => {
                    if (search == '') {
                        return res
                    } else {
                        if (res.Name.toLowerCase().includes(search.toLowerCase())) {
                            return res
                        }
                    }
                }).map((res, key) => (
                    <div key={key}>
                        <p key={key} onClick={() => { setChoice(res.Name, res.Id); setCourortid(res.Id); setCourort(res.Name); }}>{res.Name}</p>
                    </div>
                ))}
            </div>
            )}
        </section>
    )
}

export default Courort
