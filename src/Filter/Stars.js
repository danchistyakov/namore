import React, { useState } from 'react'

const Stars = () => {
    const [stars, setStars] = useState([2, 3, 4, 5]);
    const [rate, setRate] = useState(null);
    console.log(rate)
    return (
        <div>
            <p>Звёздность:</p>
            <p>От<input type="text" onChange={e => setRate(e.target.value)} value={rate}></input> звёзд</p>
        </div>
    )
}

export default Stars
