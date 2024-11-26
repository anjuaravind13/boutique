import {useState} from 'react'
import AXIOS  from 'axios'
import { Container,Row,Col,Button,Form } from 'react-bootstrap';

function  Categoryreg(){
    const  [cname,setCname]=useState("");

    const regcategory=()=>{
        AXIOS.post("http://localhost:9000/categoryreg",{cname:cname}).then((res)=>{
            alert(res.data.msg)
        })
    }
    
    return(
        
        <>
  <Container>
  <Row className="justify-content-center mt-3">
        <Col lg={6} className="p-3 mt-2 border">
            <Form onSubmit={()=>{regcategory()}}>
                <Form.Group>
                    <Form.Label>Category Name</Form.Label> 
                    <Form.Control
                     type="text"
                     name="cname"
                     onChange={(e)=>{setCname(e.target.value)}}
                     ></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Button type="submit">Create</Button>
                </Form.Group>

            </Form>
        </Col>
    </Row>
  </Container>

        </>
    )

}
export  default Categoryreg;