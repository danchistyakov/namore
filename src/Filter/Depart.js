import React, { useState, useEffect } from 'react'

const Depart = ({ setDepartid }) => {
    const [list, setList] = useState(null);
    const [search, setSearch] = useState('Москва');
    const [display, setDisplay] = useState(false);
    const [id, setId] = useState(null);
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
    const setChoice = (choice, id) => {
        setSearch(choice);
        setId(id);
        setDisplay(false);
    }
    return (
        <section>
            <p>{id}</p>
            <p>Выберите город вылета:</p>
            <input type='text' onChange={e => setSearch(e.target.value)} onClick={() => { setSearch(''); setDisplay(!display) }} placeholder='Выберите город вылета...' value={search}></input>
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
                        <p key={key} onClick={() => { setChoice(res.Name, res.Id); setDepartid(res.Id) }}>{res.Name}</p>
                    </div>
                ))}
            </div>
            )}
        </section>
    )
}

export default Depart
