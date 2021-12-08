// importing css files
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  "./App.css";
// components import
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';
import Repos from './pages/Repos/Repos.js'
// context and state
import { useState, createContext} from "react";
// import from react router dom
import {Route,Routes} from 'react-router-dom';


//context 
export const Context = createContext();
// component function
function App() {
  const [path, setpath] = useState(null);
  function oncontextmenuHandler(e) {
    e.preventDefault();
    alert('right click not allowed')
  }
  return (
    <Context.Provider value={{path,setpath}}>
    <div className="container-fluid c" onContextMenu={oncontextmenuHandler}>
          <Routes>
            <Route path="/" element={[<Header key={1}/>,<Repos key={2}/>]}/>
            <Route path="/repo" element={[<Header key={1}/>, <MainSection key={2}/>]}/>
            <Route path= "*" element={<Header/>}/>
          </Routes> 
    </div>
    </Context.Provider>
    
  ); 
}

export default App;
