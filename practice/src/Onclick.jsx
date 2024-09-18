import React, { useState } from 'react'

function SetComponent() {

    const [value, setValue] = useState(0);

    const Increment = () => {
        setValue(value + 1)
    }
    const Decrement = () => {
        setValue(value - 1)
    }
    const ResetValue = () => {
        setValue(0)
    }

    return (
        <div><h1>
            value:{value}
        </h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={ResetValue}>Reset</button>
        </div>
    )
}

export default SetComponent