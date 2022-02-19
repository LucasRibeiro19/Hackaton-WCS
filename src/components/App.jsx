import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import QRCode from 'qrcode.react';
import Homepage from './Homepage';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
