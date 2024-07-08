
import './App.css';
import Navbar from "./components/navbar";
import Hoemid from "./components/homemid";
import Page2 from "./components/Page2";
import Page3 from "./components/page3";
import Page4 from "./components/page4";
import Band from "./components/band";
import Page5 from "./components/page5";


function App() {
  return (
    <div className="App">
       <div >
           <div>
          <Navbar />
           <Hoemid />
           </div>
           <div>
              <Page2 />
           </div>
           <div>
            <Page3 />
           </div>
           <div>
               <Page4 />
           </div>

           <div>
               <Page5/>
           </div>
       </div>
    </div>
  );
}

export default App;
