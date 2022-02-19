import {useParams} from 'react-router-dom';
import Carte from './Carte';


function Commande() {

    const params = useParams()

    return ( 
        <>
            <Carte/>
            <h2>Table {params.table}</h2>
        </>
     );
}

export default Commande;