import { useState } from "react"

const inialValues = [
    0 , 0 ,0
]

const nums = [
    1 , 2 ,3 , 4 , 5 ,6 
]

console.log(`%c ${nums.find((num) => num > 1)} `, "background: red; color: white; padding: 5px;");

export default function Temp(){
    const [counter , setCounter] = useState(inialValues)
 
    function handleIncrement(index){
        const nextCounters = counter.map((c , i) => {
            if(i === index){
                return c + 1
            }
        
            else{
                return c;
            }
        })
        setCounter(nextCounters)
    }


    return(
        <>
        <ul>
            {counter.map((counter ,i) => {
                return <li key={i}>{counter} <button onClick={() => handleIncrement(i)}>Increment</button></li>
            })}
        </ul>
        </>
    )    

}