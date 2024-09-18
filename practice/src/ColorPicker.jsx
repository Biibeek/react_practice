import React, { useState } from 'react'

function ColorPicker() {
    const [color, setColor] = useState("#FFFFFF")

    const handlee = (event) => {
        setColor(event.target.value)
    }
    return (<>

        <div className='Container'>

            <h1>Pick Color</h1>
            <div className='color-display' style={{
                backgroundColor: color
            }}>
                <p>selected color is:{color}</p>
                <input type="color" value={color} onChange={handlee}></input>
            </div>
        </div>

    </>)
}

export default ColorPicker