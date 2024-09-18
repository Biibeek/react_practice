import React, { useState } from 'react'

function MyComponent() {
    const [name, setName] = useState("Guest")
    const [age, setAge] = useState(0)
    const [isEmployee, setIsEmployee] = useState(false)


    const updateName = () => {
        setName("bbek")
    }
    const IncrementAge = () => {
        setAge(age + 1)
    }
    const Togglebtn = () => {
        setIsEmployee(!isEmployee)
    }

    return (<div>

        <p>Name:{name}</p>
        <button onClick={updateName}>clickme</button>

        <p>Age:{age}</p>
        <button onClick={IncrementAge}>Increase</button>


        <p>Is Employee:{isEmployee ? "Yes" : "No"}</p>
        <button onClick={Togglebtn}>Change</button>
    </div>
    )
}

export default MyComponent