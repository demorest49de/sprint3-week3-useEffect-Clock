import React, {useEffect, useState} from "react"


export default {
    title: 'UseEffect/UseEffect demo'
}

export const UseEffectSetTimeOut = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log(' component render: ')
    ;

    useEffect(() => {
        console.log('useEffect every render');
    })

    useEffect(() => {
        console.log('useEffect only first render');
    }, [])

    useEffect(() => {
        console.log('useEffect every counter increased render');
    }, [counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}