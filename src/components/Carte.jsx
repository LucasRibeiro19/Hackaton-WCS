import { Table } from "reactstrap";
import Menu from "./Menu";

function Carte({plats, handleChoix, isChoix, table}) {
    return ( 
        <>
            {plats.map((plat)=>(
               <Menu
                id={table.id}
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