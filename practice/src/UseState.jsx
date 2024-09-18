import React, { useState } from 'react'

function UseState() {
    const [name, setName] = useState("")
    const handlee = () => {
        setName("hy")
    }

    return (<>
        <p>Name:{name}</p>
        <button onClick={handlee}>click me</button>
    </>)
}

export default UseState