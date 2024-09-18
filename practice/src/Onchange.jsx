import React, { useState } from 'react'

function Onchange() {
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState()


    function handleevent(event) {
        setName(event.target.value)
    }
    function handleq(event) {
        setQuantity(event.target.value)
    }
    return (
        <div>
            <input value={name} onChange={handleevent} ></input>
            <h1>Name:{name}</h1>

            <input value={quantity} onChange={handleq} type='number'></input>
            <h1>Quantity:{quantity}</h1>
        </div>
    )
}

export default Onchange