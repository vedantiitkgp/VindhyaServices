import React, { useState } from "react";
import { useNavigate } from "react-router";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './customCalender.css'
import './taxi.css'

function Taxi(){
    const [value, onChange] = useState(new Date());
    const navigate = useNavigate();

    const onDateChange = (date) => {
        onChange(date)
    }

    const onClick = () => {
        console.log(value)
        const day = value.getDate() < 10 ? `0${value.getDate()}` : value.getDate();
        let month = value.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;
        const year = value.getFullYear();
        navigate(`/taxi/bids/${day}_${month}_${year}`)
    }

    return(
        <div className="taxi">
            <Calendar onChange={onDateChange} value={value} />
            <div className='check-btn' onClick={onClick}>Check Bookings</div>
        </div>
    )
}

export default Taxi;