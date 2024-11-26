import Navbr from "./navbr";
import {Container,Row,Col,Form,Button} from 'react-bootstrap'
import { useState } from 'react';
import AXIOS from 'axios';

function Register() {
    <Navbr/>
    const [bname,setBname]=useState("")
    const [ownname,setOwnname]=useState("")
    const [badd,setBAdd]=useState("")
    const [shopreg,setShopreg]=useState("")
    const [bphone,setBphone]=useState("")
    const [eml,setEml]=useState("")
    const [passw,setPassw]=useState("")
    const [image,setImage]=useState({preview:'',data:''})
    
    const imageSet=(e)=>{
        const img={
            preview:URL.createObjectURL(e.target.files[0]),
            data:e.target.files[0]
        }
        setImage(img)
       
    }

    const handler=async()=>{
        alert("handler")
       const formdata=new FormData();
       formdata.append("file",image.data)
       formdata.append('bname',bname)
       formdata.append('ownname',ownname)
        formdata.append('badd',badd)
        formdata.append('shopreg',shopreg)
        formdata.append('bphone',bphone)
        formdata.append('eml',eml)
        formdata.append('passw',passw)
       await AXIOS.post("http://localhost:9000/register",
       formdata,{'content-type':'multipart/form-data'}).then((res)=>{
        alert(res.data.msg)

       })
       
    }
 return(
    <>
    <div className="rounded-5"
    style={{
    width:'100%',
    backgroundImage:`url('https://images.unsplash.com/photo-1589485382400-383ef151a8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80')`,
    backgroundPosition:"center",
    justifyContent: "center",
    backgroundSize:"cover",
    //display:"flex",
    }}>
    <Container>
    <Row>
                <Col className='text-center'>
                <h1 className="text-center">BOUTIQUE REGISTER !</h1>
                </Col>
                </Row>
                
        
        <Row className=" justify-content-center mt-2">
                <Col lg={6} className="border p-3">
             <Form  encType='multipart/form-data'>
             <Form.Group>
                    <Form.Label>BOUTIQUE NAME</Form.Label>
                    <Form.Control
                    type="text"
                    onChange={(e)=> setBname(e.target.value)}>
                    </Form.Control> 
                    </Form.Group>
                    
                    <Form.Group>
                    <Form.Label>OWNER'S NAME</Form.Label>
                    <Form.Control
                    type="text"
                    onChange={(e)=> setOwnname(e.target.value)}
                    >
                        
                    </Form.Control> 
                    </Form.Group>

                    <Form.Group>
                    <Form.Label>BOUTIQUE ADDRESS</Form.Label>
                    <Form.Control
                    type="text"
                    onChange={(e)=> setBAdd(e.target.value)}
                    >
                        
                    </Form.Control> 
                    </Form.Group>

                    <Form.Group>
                    <Form.Label>SHOP REGISTERATION NUMBER</Form.Label>
                    <Form.Control
                    type="text"
                    onChange={(e)=> setShopreg(e.target.value)}
                    >
                        
                    </Form.Control> 
                    </Form.Group>

                    <Form.Group>
                    <Form.Label>PHONE</Form.Label>
                    <Form.Control
                    type="number"
                    onChange={(e)=> setBphone(e.target.value)}>
                    </Form.Control> 
                    </Form.Group>

                    <Form.Group>
                <Form.Label>
                    Email Address
                </Form.Label>
                <Form.Control
                type="email"
                placeholder="Your email address"
                onChange={(e)=>setEml(e.target.value)}
                required
                ></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                   Password
                </Form.Label>
                <Form.Control
                type="password"
                placeholder="Your email address"
                onChange={(e)=>setPassw(e.target.value)}
                required
                ></Form.Control>
            </Form.Group>

                <Form.Group>
                    <Form.Label>SHOP PHOTO</Form.Label>
                    <Form.Control
                     type="file"
                     name="file"
                     onChange={(e)=>imageSet(e)}
                    >
               
                    </Form.Control>
                </Form.Group>
                
                <Form.Group className='mt-2 btn btn-primary'>
                    <Button type="submit" onClick={()=>{handler()}}>Register</Button>
                </Form.Group>
             </Form>
            </Col>
        </Row>
   
            <Col>
             {image.preview &&<img src={image.preview} width="200" height="200"/>}
            </Col>
      
    </Container>
    </div>
    </>
 )
}
export default Register;