import React from 'react'

export default function Panier( {choix} ) {

    console.log(choix);
    return (
        <>
            <h2>Mon choix :</h2>
            <ul>
                {choix.map(plat=> <li>{plat}</li>)}
            </ul>
        </>
    )
}
