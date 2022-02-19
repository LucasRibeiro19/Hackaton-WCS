import Menu from "./Menu";

function Carte({plats, handleChoix, isChoix}) {
    return ( 
        <>
            {plats.map((plat)=>(
               <Menu
                nom={plat.nom}
                img={plat.img}
                handleChoix={handleChoix}
                key={plat.id}
                isChoix={isChoix}
               /> 
            ))}
        </>

     );
}

export default Carte;