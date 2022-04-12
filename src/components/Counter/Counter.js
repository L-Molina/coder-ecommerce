import { useState, useEffect } from 'react'
import './Counter.css'

const Counter = ({initial, stock, onAdd}) => {
    console.log(useState())
    
    const [count, setCount] = useState()
    
    useEffect(() => {
        console.log('Se ha hecho el montaje del componente')
        let isActive = true

        setTimeout(() => {
            if(isActive){
                setCount(1)
            }
        }, 500)

        return (() => {
            isActive = false
            console.log('Esto se ejecuta antes de montar el contador')
        })
    }, [])

    useEffect(() => {
        console.log('cambió el count')
    }, [count])


    //increment and decrement

    const decrement = () => {
        if(count > 1) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        if(count < 9) {
            setCount(count + 1)
        }
    }

    return(
        <>
        
        <div className='counter-container'>
            <p className='counter-text'>Units</p>
            <div className='counter-wrap'>
                <h3 className='counter-button counter-sign' onClick={decrement}>-</h3>
                <p>{count}</p> 
                <h3 className='counter-button counter-sign' onClick={increment}>+</h3>
            </div>
            <div className='counter-container'>
                <h3 className='counter-button counter-text' onClick={onAdd(count)}>Add to Cart</h3>
            </div>
        </div>
        </>
    )
}

export default Counter