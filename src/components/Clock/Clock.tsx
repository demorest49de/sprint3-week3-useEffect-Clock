import React, {useEffect, useState} from "react";

type ClockPropsType = {}


export const Clock: React.FC<ClockPropsType> = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(intervalID)
    }, []);

    const get2DigitsString = (number: number) => {
        console.log('TICK!!');
        return number < 10 ? `0${number}` : `${number}`
    }

    return <div>
        <span>{get2DigitsString(date.getHours())}</span>
        :
        <span>{get2DigitsString(date.getMinutes())}</span>
        :
        <span>{get2DigitsString(date.getSeconds())}</span>
    </div>
}