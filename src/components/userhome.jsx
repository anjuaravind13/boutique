
import Usernavbr from "./usernavbr";

function Userhome() {
   
    const userid=sessionStorage.getItem("userid")
    return (  <>
    <Usernavbr/>
    <h1 className="shadow rounded p-3 mb-2 d-flex justify-content-center "
    style={{marginTop:"20px",
    height:"400px",
    
     backgroundImage:`url('https://images.unsplash.com/photo-1589485382400-383ef151a8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80')`,
    // maxHeight :'100%',
     width:'100%',
     backgroundPosition:"center",
    //justifyContent: 'space-between',
    display:'flex',
    
    backgroundSize:"100% 400%",}}
    
    >User Home {userid}</h1>
    </>);
}

export default Userhome;
