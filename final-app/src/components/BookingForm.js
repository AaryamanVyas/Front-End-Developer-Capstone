import React, { useState } from "react";

const BookingForm = ({availableTimes,setAvailableTimes}) => {
    const [date,setDate]=useState("");
    const [time,setTime]=useState("17:00");
    const [guests,setGuests]=useState(1);
    const [occasion,setOccasion]=useState("Birthday");
    const availableTimes=["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const handleDateChange=(e)=>{
        const selectedDate=e.target.value;
        setDate(selectedDate);
        dispatch({type:"UPDATE_TIMES",date:selectedDate})
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log({date,time,guests,occasion});
    }
    return(
        <form style={{ display:"grid",maxWidth:"200px", gap:"20px"}}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={handleDateChange}/>

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={(e)=>setTime(e.target.value)}>
                {availableTimes.map((t)=>(
                    <option key={t} value={t}>
                        {t}
                    </option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e)=> setGuests(Number(e.target.value))}/>

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e)=>setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="make your reservation"/>
        </form>

    );
};
export default BookingForm;