import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import Homepage from './QrList';
import QrList from './QrList';
import Commande from './Commande';
import { Form } from 'reactstrap';

function App() {
  
   
  const tables = [
    {id : '1'},
    {id : '2'},
    {id : '3'},
    {id : '4'}
  ];
  
  
  return (
    

    <>
      <div>
        <Routes>
          <Route path='/' element={<QrList tables={tables}/>}></Route>
          <Route path='/commande/:table' element={<Commande/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
