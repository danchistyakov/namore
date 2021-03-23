import React, { useState } from 'react'

const Courort = ({ countryid, setCourortid, setCourort, style }) => {
    const [list, setList] = useState(null);
    const [search, setSearch] = useState('Анталия');
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
        <div>
            <p className={style.option_title}>Выберите курорт:</p>
            <div className={style.options_section}>
                <input type='text' className={style.filter_input_location} onChange={e => setSearch(e.target.value)} onClick={() => { setSearch(''); setDisplay(!display); Fetch() }} placeholder='Выберите курорт...' value={search} />
                {display && (<div>
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
                            <p className={style.option_var} key={key} onClick={() => { setChoice(res.name, res.Id); setSearch(res.Name); setCourortid(res.Id); setCourort(res.Name); }}>{res.Name}</p>
                        </div>
                    ))}
                </div>
                )}
            </div>
        </div>
    )
}

export default Courort
