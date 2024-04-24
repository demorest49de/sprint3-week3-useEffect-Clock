import React, {useEffect, useState} from "react"


export default {
    title: 'UseEffect/UseEffect demo'
}

export const UseEffectSetTimeOut = () => {

    const [counter, setCounter] = useState(1)

    console.log(' component render: ')
    ;

    useEffect(() => {
        console.log('useEffect every counter increased render');
        console.log(' use effect : ' + counter)
        return () => {
            console.log(' reset effect : ' + counter)
            ;
        }
    }, [counter])

    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}

export const KeysTrackerDemo = () => {

    const [text, setText] = useState('')

    console.log(' component render: ' + text);

    useEffect(() => {
        const handler = (e: KeyboardEvent)=> {
            setText((state)=> state + e.key)
            console.log(' e.key, text: ', e.key, text);
        }
        window.addEventListener('keydown', handler)
        return ()=>{
            window.removeEventListener('keydown', handler)
        }
    }, [])

    return <>
        Typed text: {text}
    </>
}


























