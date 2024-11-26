import React from 'react';
import {Button,Container,Row,Col}from'react-bootstrap'
import { useState,useEffect } from 'react';
import AXIOS from'axios'
import {Link, useParams} from 'react-router-dom';
import pic from './images/cart1.png';
import eye from './images/eye.png';


function Singleview() {
//     const [pimage,setPimage]=useState([])
//     useEffect(()=>{
       
//        AXIOS.get('http://localhost:9000/singleview').then((res)=>{
//           setPphoto(res.data.images)

//        })
//   },[])

//     const Viewpage=(idno)=>{
//         AXIOS.get("http://localhost:9000/individualpage",{
//             params:{
//                 idnos:idno
//             }
//         }).then((res)=>{
//             setPimage(res.data.images)
//         })
//     }
    return (  <>
    <Container>
        <Row>
            <Col>
         <h5>hello</h5>
            </Col>
        </Row>
    </Container>
    
    </>);
}

export default Singleview;