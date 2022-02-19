import Menu from "./Menu";

function Carte({plats}) {
    return ( 
        <>
            {plats.map((plat)=>(
               <Menu
                nom={plat.nom}
                img={plat.img}
                key={plat.id}
               /> 
            ))}
        </>

     );
}

export default Carte;