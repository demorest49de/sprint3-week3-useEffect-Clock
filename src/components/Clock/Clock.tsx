import React, {useState} from "react";

type ClockPropsType = {

}


export const Clock: React.FC<ClockPropsType> = () =>{
    const [date, setDate] = useState(new Date());
    return <div>
        <span>{date.getHours()}</span>
        :
        <span>{date.getMinutes()}</span>
        :
        <span>{date.getSeconds()}</span>
    </div>
}