import React, { useState } from 'react'

const Country = ({ departid, setCountryid }) => {
    const [list, setList] = useState(null);
    const [search, setSearch] = useState('Турция');
    const [display, setDisplay] = useState(false);

    const Fetch = async () => {
        const response = await fetch(`https://module.sletat.ru/Main.svc/GetCountries?townFromId=${departid}`);
        const result = await response.json();
        setList(result.GetCountriesResult.Data);
    }


    const setChoice = (choice, id) => {
        setSearch(choice);
        setCountryid(id);
        setDisplay(false);
    }
    return (
        <section>
            <p>Выберите страну:</p>
            <input type='text' onChange={e => setSearch(e.target.value)} onClick={() => { setSearch(''); setDisplay(!display); Fetch() }} placeholder='Выберите страну прибытия...' value={search} />
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
                        <p key={key} onClick={() => { setChoice(res.Name, res.Id) }}>{res.Name}</p>
                    </div>
                ))}
            </div>
            )}
        </section>
    )
}

export default Country
