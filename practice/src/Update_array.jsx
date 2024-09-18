import React, { useState } from 'react'

function Update_array() {
    const [fruits, setFruits] = useState(["Apple", "Orange", "Grapes", "Mango"])

    function handlee() {
        const newItem = document.getElementById("fruitid").value;
        document.getElementById("fruitid").value = "";
        setFruits(f => [...f, newItem])
    }
    function handleeReemove(index) {

        setFruits(fruits.filter((_, i) => i !== index))
    }
    return (<div>
        <ul>
            {fruits.map((fruit, index) => <li key={index} onClick={() => handleeReemove(index)}>{fruit}</li>)}

        </ul>
        <input type='text' id='fruitid' placeholder='Enter What u like'></input>
        <button onClick={handlee}>ADD</button>
    </div>
    )
}

export default Update_array