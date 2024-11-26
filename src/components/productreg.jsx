import { Container,Row,Col,Form,Button } from "react-bootstrap";
import {useState, useEffect} from 'react'
import AXIOS  from 'axios'
import Usernavbr from "./usernavbr";
import Categoryreg from "./categoryreg";
import Viewproduct from "./viewproduct";
//import Productlist from "./productlist";

function Productreg(){

    const [cat,setCat]=useState([])
    
    const [ct,setCt]=useState("")
    const [pname,setPname]=useState("")
    const [pstock,setPstock]=useState("")
    const [pprice,setPprice]=useState("")
    const userid= sessionStorage.getItem("userid");
    const [pphoto,setPphoto]=useState({preview:'',data:''});
    const productphotoSet=(e)=>{
        const img={
            preview:URL.createObjectURL(e.target.files[0]),
            data:e.target.files[0]
        }
        setPphoto(img)
       
    }
    const handleout=async(e)=>{  
      
        alert("hai")
        const formdata=new FormData()
        formdata.append("file",pphoto.data)
        formdata.append('pname',pname)
        formdata.append('pprice',pprice)
        formdata.append('pstock',pstock)
        formdata.append('ct',ct)
        
        formdata.append('userid',userid)
       AXIOS.post("http://localhost:9000/productreg/",formdata,{'content-type':'multipart/form-data'}).then((res)=>{
            alert(res.data.msg)
    })
}



    useEffect(()=>{
                 AXIOS.get("http://localhost:9000/categoryAll").then((res)=>{
              setCat(res.data.result)
                 })
    },[])

    return(<>
    
    <div
    style={{marginTop:"50px",
    width:'100%',
    backgroundImage:`url('https://images.unsplash.com/photo-1589485382400-383ef151a8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80')`,
    backgroundPosition:"center",
    justifyContent:"center",
    backgroundSize:"cover",
    //display:"flex",
    }}>
    <Usernavbr/>
    <Categoryreg/>
    <Container>
   <Row className="justify-content-center mt-3">
  
        <Col lg={6} className="p-3 mt-2 border">
        
                <h1>Register your product here !</h1>
        </Col>
    </Row>
    <Row className="justify-content-center mt-3">
    
        <Col lg={6} className="p-3 mt-2 border">
        <Form encType="multipart/form-data">
                <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <select onChange={(e)=>setCt(e.target.value)}>
                        <option>Select</option>

                        {
                            cat.map((ls)=>{
      return(<option value={ls._id}>{ls.cname}</option>)
                            })
                        }
                    </select>
                </Form.Group>
            </Form>
        </Col>
    </Row>
    <Row className="justify-content-center mt-3">
  
        <Col lg={6} className="p-3 mt-2 border">
        <Form>
            <Form.Group>
                <Form.Label>Product Name</Form.Label>
                            <Form.Control
                                    type="text"
                                    name="pname"
                                    onChange={(e)=>setPname(e.target.value)}
                                    placeholder="enter product name"
                                    required>
                            </Form.Control>
            </Form.Group>
            <Form.Group>
                        <Form.Label>
                        Product Stock
                        </Form.Label>
                        <Form.Control
                                        type="number"
                                        name="pstock"
                                        onChange={(e)=>setPstock(e.target.value)}
                                        placeholder="enter product stock"
                                        required
                        >
                        </Form.Control>
                       </Form.Group>

                       <Form.Group>
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control
                                        
                                        type="number"
                                        name="pprice"
                                        onChange={(e)=>setPprice(e.target.value)}
                                        placeholder="enter product price"
                                        required>
                        </Form.Control>
                       </Form.Group>

                       <p>Supplier ID: {userid}</p>

                       <Form.Group>
                        <Form.Label>Product Photo</Form.Label>
                        <Form.Control
                                     type="file"
                                        name="pphoto"
                                        onChange={(e)=>productphotoSet(e)}
                                        placeholder="upload product photo"
                                        required>
                        </Form.Control>
                       </Form.Group>

                       <Form.Group>
                            <Button type="button" onClick={()=>{handleout()}}>Post</Button>
                       </Form.Group>

                       





        </Form>
        </Col>
    </Row>
    <Col>
             {pphoto.preview &&<img src={pphoto.preview} width="200" height="200"/>}
            </Col>

   

   
   

   </Container>
   </div>
    </>)
}
export  default Productreg
