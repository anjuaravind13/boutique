import Navbr from "./navbr";
import {Container,Row,Col,Form,Button} from 'react-bootstrap'
import { useState } from 'react';
import AXIOS from 'axios';
import { useNavigate } from "react-router-dom";
import Viewcart from "./viewcart";
// import Cartcard from "./cartcard";

function Login() {
    
    <Navbr/>
    const navig=useNavigate();
    const [eml,setEml]=useState("")
    const [passw,setPassw]=useState("")
    const handleout=async()=>{
        await AXIOS.post("http://localhost:9000/login",{eml:eml,passw:passw}).then((res)=>{
            if(res.data.status){
                sessionStorage.setItem("userid",res.data.idno)
               alert(sessionStorage.getItem("userid"))
              navig("/userhome")

            }
            else{
                alert("invalid email & password")
            }
        })
       
    }

    return ( <>
   
   <Container>
    <Row>
        <Col>
        <h1 className="text-center">LOGIN HERE !</h1>
        </Col>
    </Row>
    <Row className="justify-content-center mt-3">
        <Col lg={4} className="border p-3">
        <Form>
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
                placeholder="Your email password"
                onChange={(e)=>setPassw(e.target.value)}
                required
                ></Form.Control>
            </Form.Group>
            <Form.Group>
            <Button type="button" onClick={handleout}>Log In</Button>
            </Form.Group>
        </Form>
        </Col>
    </Row>
   </Container>

    </> );
}

export default Login ;