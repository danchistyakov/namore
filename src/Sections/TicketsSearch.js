import React, { useEffect } from 'react'

const TicketsSearch = ({ departiata, airiata }) => {

    useEffect(() => {
        const Fetch = async () => {
            const response = await fetch(`http://api.travelpayouts.com/v2/prices/latest?currency=rub&period_type=year&origin=${departiata}&destination=${airiata}&page=1&limit=1000&show_to_affiliates=false&sorting=price&token=39dca409892e6352d0dcdac2bd36920f`,
                {
                    method: "GET",
                    headers: {
                        'Accept-Encoding': 'gzip, deflate',
                        'X-Access-Token': "39dca409892e6352d0dcdac2bd36920f",
                    },
                }
            );
            const result = await response.json();
            console.log(result);
        }
        Fetch();
    }, [departiata, airiata])
    return (
        <div>

        </div>
    )
}

export default TicketsSearch
