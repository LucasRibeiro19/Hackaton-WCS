import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import QrList from './QrList';
import Commande from './Commande';
import Carte from './Carte';

function App() {
  
   
  const tables = [
    {id : '1'},
    {id : '2'},
    {id : '3'},
    {id : '4'}
  ];
  

  const plats = [
    {id : 1, nom : 'Burger', img : 'https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_960_720.jpg'},
    {id : 2, nom : 'Burger', img : 'https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_960_720.jpg'},
    {id : 3, nom : 'Burger', img : 'https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_960_720.jpg'}
  ]
  
  return (
    

    <>
      <div>
        <Routes>
          <Route path='/' element={<QrList tables={tables}/>}></Route>
          <Route path='/carte' element={<Carte plats={plats}/>}></Route>
          <Route path='/commande/:table' element={<Commande plats={plats}/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
