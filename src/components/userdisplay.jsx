import {Container,Row,Col,Form,Button} from 'react-bootstrap'
import { useEffect, useState } from 'react';
import AXIOS from 'axios';
import Table from 'react-bootstrap/Table';
import Usernavbr from "./usernavbr";

function Userdisplay() {
    const [dats,setDats]=useState("");
    useEffect(async()=>{
        await AXIOS.get("http://localhost:9000/userdisplay",{
            params:{
                value:sessionStorage.getItem("userid")
            }
        }).then((res)=>{
            setDats(res.data.result)
        })
    })
    return ( 
    <>
    <Container>
        <Row>
            <Col>
            <Container>
        <Row>
            <col>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product</th>
          
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            dats.map((ls)=>{
                return(
                    <tr>
                    <td>{ls.product}</td>
                    </tr>
                )
            })
        }
      </tbody>
      </Table>
            </col>
        </Row>
    </Container>
            </Col>
        </Row>
    </Container>
    </> );
}

export default Userdisplay;