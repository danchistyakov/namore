import React, { useState } from 'react'

const Guests = ({ style }) => {
    const [adult, setAdult] = useState(2);
    const [baby, setBaby] = useState(0);
    const [age, setAge] = useState(6);
    const [display, setDisplay] = useState(false);
    const listage = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

    return (
        <div>
            <p className={style.option_title}>Взрослых</p>
            <div className={style.options_section}><span className={style.amount_button} onClick={() => adult > 0 && setAdult(adult - 1)}>-</span><input className={style.filter_input_guests} onChange={e => setAdult(e.target.value)} value={adult}></input><span className={style.amount_button} onClick={() => setAdult(adult + 1)}>+</span></div>
            <p className={style.option_title}>Детей</p>
            <div className={style.options_section}><span onClick={() => baby > 0 && setBaby(baby - 1)}>-</span><input className={style.filter_input_guests} onChange={e => setBaby(e.target.value)} value={baby}></input><span className={style.amount_button} onClick={() => setBaby(baby + 1)}>+</span></div>
            {baby > 0 && (<div><p className={style.option_title}>Возраст детей</p>
                <div className={style.options_section}>
                    <div><span className={style.amount_button} onClick={() => age > 0 && setAge(age - 1)}>-</span><input className={style.filter_input_guests} onChange={e => setAge(e.target.value)} onClick={() => setDisplay(!display)} value={age}></input><span className={style.amount_button} onClick={() => setAge(age + 1)}>+</span></div>
                    {display && (<div className={style.filter_input_guests}>
                        {listage?.map((agelist, key) => (
                            <p className={style.option_var} onClick={() => { setAge(agelist); setDisplay(!display) }}>{agelist}</p>
                        ))}
                    </div>)}</div></div>)}

        </div>
    )
}

export default Guests