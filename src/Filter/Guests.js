import React, { useState } from 'react'

const Guests = ({ style }) => {
    const [adult, setAdult] = useState(2);
    const [baby, setBaby] = useState(0);
    const [age, setAge] = useState(6);
    const [display, setDisplay] = useState(false);
    const listage = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

    return (
        <div>
            <p>Взрослых</p>
            <div><span onClick={() => setAdult(adult - 1)}>-</span><input onChange={e => setAdult(e.target.value)} value={adult}></input><span onClick={() => setAdult(adult + 1)}>+</span></div>
            <p>Детей</p>
            <div><span onClick={() => setBaby(baby - 1)}>-</span><input onChange={e => setBaby(e.target.value)} value={baby}></input><span onClick={() => setBaby(baby + 1)}>+</span></div>
            <p>Возраст детей</p>
            <div><span onClick={() => setAge(age - 1)}>-</span><input onChange={e => setAge(e.target.value)} onClick={() => setDisplay(!display)} value={age}></input><span onClick={() => setAge(age + 1)}>+</span></div>
            {display && (<div className='filter_list'>
                {listage?.map((agelist, key) => (
                    <p onClick={() => { setAge(agelist); setDisplay(!display) }}>{agelist}</p>
                ))}
            </div>)}
        </div >
    )
}

export default Guests