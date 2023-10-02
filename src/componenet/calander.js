import React, { useEffect } from 'react'
import { Calendar, DateRange } from 'react-date-range';
import { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './index.css'
import { useSnapshot } from 'valtio';
import state from '../stor';
const Calander = () => {
    let snap = useSnapshot(state)
    const [stat, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);

    state.startday = stat[0].startDate
    state.endtday = stat[0].endDate
    return (
        <DateRange
            editableDateInputs={true}
            onChange={item => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={stat}
            className='r'
        />
    )
}

export default Calander


