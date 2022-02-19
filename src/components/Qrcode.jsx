import {Link} from 'react-router-dom';
import QRCode from 'qrcode.react';
import React from 'react';
function QrCode({table}) {

    const {id} = table;

    return ( 
        <>
              <Link to={`/commande/${id}`}>
                  <QRCode value="http://facebook.github.io/react/"/>
                  <p>{id}</p>
              </Link>
        </>
     );
}

export default QrCode;