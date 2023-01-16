import React, { useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import CustomizedTable from './CustomizedTable';
import { months } from './constants';
import './bids.css'

export async function BidsLoader({ params }){
    return { value : params.date }
}

function Bids(){
    const date = useLoaderData();
    const navigate = useNavigate();
    const getDate = () => {
        const [day, month, year] = date.value.split('_');
        return `${months[month-1]} ${day} ${year}` 
    }
    const leftArrowClick = () => {
        const [day, month, year] = date.value.split('_');
        const currentDayValue = new Date(`${month}/${day}/${year}`).valueOf();
        const previousDayValue = new Date(currentDayValue - 1000*60*60*24);
        const previousDayDate = previousDayValue.getDate() < 10 ? `0${previousDayValue.getDate()}` : previousDayValue.getDate();
        let previousDayMonth = previousDayValue.getMonth() + 1;
        previousDayMonth = previousDayMonth < 10 ? `0${previousDayMonth}` : previousDayMonth;
        const previousDayYear = previousDayValue.getFullYear();
        navigate(`/taxi/bids/${previousDayDate}_${previousDayMonth}_${previousDayYear}`)
    }
    const rightArrowClick = () => {
        const [day, month, year] = date.value.split('_');
        console.log(day,month,year)
        const currentDayValue = new Date(`${month}/${day}/${year}`).valueOf();
        console.log(currentDayValue)
        const nextDayValue = new Date(currentDayValue + 1000*60*60*24);
        console.log(nextDayValue)
        const addedDayDate = nextDayValue.getDate() < 10 ? `0${nextDayValue.getDate()}` : nextDayValue.getDate();
        let addedDayMonth = nextDayValue.getMonth() + 1;
        addedDayMonth = addedDayMonth < 10 ? `0${addedDayMonth}` : addedDayMonth;
        const addedDayYear = nextDayValue.getFullYear();
        navigate(`/taxi/bids/${addedDayDate}_${addedDayMonth}_${addedDayYear}`)
    }
    return(
        <div className='bids'>
            <div className='date-container'>
                <div className='left-arrow' onClick={leftArrowClick}>{'<'}</div>
                <div className='date'>{getDate()}</div>
                <div className='right-arrow' onClick={rightArrowClick}>{'>'}</div>
            </div>
            <CustomizedTable />
        </div>
    )
}

export default Bids;