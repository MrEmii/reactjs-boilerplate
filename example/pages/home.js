import React from 'react'
import Link from '../../src/router/link'


export const AppHome = () => {

    const randomNames = ["Emir", "Emil", "Emilce", "Maria", "Gisselle", "Haru", "Quimera", "Emiliano", "Emilio", "Emily", "Ed", "Eddy", "Eminem"]

    let randomIndex = Math.floor(Math.random() * randomNames.length)


    return <div>
        <h1>Welcome to home test uwu</h1>
        <Link to={`/about/${randomNames[randomIndex]}`}>Go to random parameter about</Link>
        <br />
        <Link to="/undefined">Go to undefined</Link>
    </div>

}
