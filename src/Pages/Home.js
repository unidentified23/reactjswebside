
import '../App.css';
import BottomNav from '../componets/botttomNav.js';
import { Annouceslide } from '../componets/Annouceslide.js';

function App() {
  return (
    <div className="App">
      
      <p className='H1'>THUS FAR HAS THE LORD HELPED US</p>
      <p className='H2'> ANNOUNCEMENT</p>
      <div className='Acont' > 
        <Annouceslide />
      </div>
       <BottomNav />
    </div> 
  );
}

export default App;
