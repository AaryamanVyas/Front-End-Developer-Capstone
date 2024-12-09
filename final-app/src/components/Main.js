
import { useReducer } from "react";
import BookingPage from "./BookingPage";

const initializeTimes=()=>{
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
}
const updateTimes=(state,action)=>{
    if (action.type === "UPDATE_TIMES"){
        return initializeTimes();
    }
    return state;
};
const Main = () =>{
    const [availableTimes,dispatch]=useReducer(updateTimes,initializeTimes());
    return (
        <div>
            <BookingPage availableTimes={availableTimes} setAvailableTimes={dispatch}/>
        </div>
    );
};
export default Main;