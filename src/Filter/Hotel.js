import React, { useState, useEffect } from 'react';
const Hotel = ({ courort, setHotel, setHotelid, style }) => {
    const [list, setList] = useState(null);
    const [search, setSearch] = useState('');
    const [display, setDisplay] = useState(false);

    const Fetch = async () => {
        const response = await fetch(`http://engine.hotellook.com/api/v2/cache.json?location=${courort}&lang=ru&currency=rub&checkIn=2021-12-10&checkOut=2021-12-12&limit=5000`);
        const result = await response.json();
        console.log(result)
        setList(result);
    }
    const setChoice = (choice, id) => {
        setSearch(choice);
        setDisplay(false);
        console.log(id)
    }
    return (
        <div>
            <p className={style.option_title}>Выберите отель:</p>
            <div className={style.options_section}>
                <input type='text' className={style.filter_input_hotel} onChange={e => setSearch(e.target.value)} onClick={() => { setSearch(''); setDisplay(!display); Fetch() }} placeholder='Выберите отель...' value={search} />
                {display && (<div>
                    {list?.filter((res) => {
                        if (search === '') {
                            return res
                        } else {
                            if (res?.Name?.toLowerCase().includes(search.toLowerCase())) {
                                return res
                            }
                        }
                    }).map((res, key) => (
                        <div key={key}>
                            <p className={style.option_var} key={key} onClick={() => { setChoice(res.hotelName, res.hotelId); setHotel(res.hotelName); setHotelid(res.hotelId) }}>{res.hotelName}</p>
                        </div>
                    ))}
                </div>
                )}
            </div>
        </div>
    )
}

export default Hotel