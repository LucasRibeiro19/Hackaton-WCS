import {useParams} from 'react-router-dom';
import Carte from './Carte';
import Menu from './Menu';


function Commande({plats}) {

    const params = useParams()

    return ( 
        <>
            <Carte plats={plats}/>
            <h2>Table {params.table}</h2>
        </>
     );
}

export default Commande;