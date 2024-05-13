import CounterClass from './components/CounterClass';
import './App.css';
import CounterFunction from './components/CounterFunction';
import Header from './components/Header';
import AddStudent from './components/AddStudent';
import AllStudent from './components/AllStudents';
import GetDetails from './components/GetDetails';
import EditDetails from './components/EditDetails';
import DeleteStudent from './components/DeleteStudent';
import {BrowserRouter , Router,Route, Routes} from "react-router-dom"


function App() {

  //call the classes
  return (
  
      
      <div className="App">
       <Header/>
      
       <Routes>

       <Route path="/add" element={<AddStudent/>}/>
       <Route path="/" element={<AllStudent/>}/>
       <Route path="/update/:id" element={<EditDetails/>}/>
       <Route path="/get/:id" element={<GetDetails/>}/>
       <Route path="/delete/:id" element={<DeleteStudent/>}/>

       </Routes>
      </div>
      
   

  );
}

export default App;
