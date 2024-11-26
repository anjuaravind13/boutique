import logo from './logo.svg';
import './App.css';
import { lazy,Suspense } from 'react';
import { Routes,Route } from 'react-router-dom';


function App() {
  const Reg=lazy(()=>import("./components/register"));
  const Log=lazy(()=>import("./components/login"));
  const Hm=lazy(()=>import("./components/home"));
  const Ush=lazy(()=>import("./components/userhome"));
 const Pdtdis=lazy(()=>import("./components/userdisplay"));
 const Pdtreg=lazy(()=>import("./components/productreg"));
  const Pdtcat=lazy(()=>import("./components/categoryreg"));
  const Vprt=lazy(()=>import("./components/productlist"));
  const Sv=lazy(()=>import("./components/singleview"));
  const Cartcd=lazy(()=>import("./components/cartcard"));

  // const Editpage=lazy(()=>import("./components/editpage/:id/"));
  
  return (
   <Suspense fallback={<div>Loading.....</div>}>
    <Routes>
      <Route path="/" element={<Hm/>}></Route>
      <Route path="/register" element={<Reg/>}></Route>
      <Route path="/login" element={<Log/>}></Route>
      <Route path="/userhome" element={<Ush/>}></Route>
     <Route path="/userdisplay" element={<Pdtdis/>}></Route>
     <Route path="/productreg" element={<Pdtreg/>}></Route>
     <Route path="/categoryreg" element={<Pdtcat/>}></Route>
     <Route path="/edit/:id" element={<Vprt/>}></Route>
     <Route path="/singleview" element={<Sv/>}></Route>
     <Route path="/cartcard" element={<Cartcd/>}></Route>
    {/* <Route path="/editpage/:id/" element={<Editpage/>}/>  */}
    
     {/* <Route path="/productlist" element={<Pdtlist/>}></Route>
   */}
    </Routes>

   </Suspense>
  );
}

export default App;
