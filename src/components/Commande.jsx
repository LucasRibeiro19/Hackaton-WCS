import {useParams} from 'react-router-dom';
import Carte from './Carte';
import Menu from './Menu';
import Panier from './Panier';


function Commande({plats, handleChoix, isChoix, choix}) {

    const params = useParams()

    return ( 
        <>
            <Carte plats={plats} handleChoix={handleChoix} isChoix={isChoix}/>
            <h2>Table {params.table}</h2>
            <Panier choix={choix}/>
        </>
     );
}

export default Commande;