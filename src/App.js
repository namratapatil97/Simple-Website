import './App.css';
import { BrowserRouter } from "react-router-dom";
import Routing from './Rounting';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </>

  );
}

export default App;
