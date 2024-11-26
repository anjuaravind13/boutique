import { Container } from "react-bootstrap";
import Navbr from "./navbr";
import Productlist from "./productlist";
import Viewproduct from "./viewproduct";

function Home() {
    return ( <>
    <Container>
    
    <Navbr/>
    <h1 className='text-secondary d-flex justify-content-center fs-1'
    style={{marginTop:"20px",
    height:"400px",
    
     backgroundImage:`url('https://images.unsplash.com/photo-1589485382400-383ef151a8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80')`,
    // maxHeight :'100%',
     width:'100%',
     backgroundPosition:"center",
    //justifyContent: 'space-between',
    display:'flex',
    
    backgroundSize:"100% 400%",}}>Homepage</h1>
    <Viewproduct/>
    
    {/* <Productlist/> */}
    </Container>
    </> );
}

export default Home;