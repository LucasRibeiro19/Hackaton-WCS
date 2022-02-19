import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import {useState} from 'react';
import QrList from './QrList';
import Commande from './Commande';
import Carte from './Carte';

function App() {
  
  const [choix, setChoix] = useState([]);
  
  const [tables, setTables] = useState([
    {id : '1', panier: []},
    {id : '2', panier: []},
    {id : '3', panier: []},
    {id : '4', panier: []}
  ]);

  const handleChoix = (e)=>{
    if (choix.includes(e.target.value)){
      setChoix((prevChoix) => {
        return prevChoix.filter((el) => el !== e.target.value);
      });
    }
    else{
      setChoix((prevChoix)=>[...prevChoix, e.target.value])
    } 
  }

  const isChoix = (id) => {
    return choix.some((el) => el === id);
  };
  
   
  

  const plats = [
    {id : 1, nom : 'Burger', img : 'https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_960_720.jpg'},
    {id : 2, nom : 'Salade', img : 'https://cdn.pixabay.com/photo/2016/09/15/19/24/salad-1672505_960_720.jpg'},
    {id : 3, nom : 'Spaghetti', img : 'https://cdn.pixabay.com/photo/2018/07/18/19/12/pasta-3547078_960_720.jpg'}
  ]
  
  return (
    

    <>
      <div>
        <Routes>
          <Route path='/' element={<QrList tables={tables}/>}></Route>
          <Route path='/commande/:table' element={<Commande plats={plats} handleChoix={handleChoix} isChoix={isChoix} choix={choix}/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
