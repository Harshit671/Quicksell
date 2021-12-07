import React from 'react'

const Button = ({ operator, func }) => {
    return (
        <>
            <button className={operator == "decrement" ? "dec" : "inc"} onClick={func}>{operator == "decrement" ? "-" : "+"}</button>
        </>
    )
}

export default Button
