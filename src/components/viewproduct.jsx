import React from 'react';
import {Button,Container,Row,Col}from'react-bootstrap'
import { useState,useEffect } from 'react';
import AXIOS from'axios'
import './product-list.css';
import {Link, useParams} from 'react-router-dom';
import cartpic from './images/cart1.png';
import eye from './images/eye.png';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux'
import {  increment } from './counter/slicecounter';
//import Cart from './cart';
import './view-product.css';


function Viewproduct() {

const [pphoto,setPphoto]=useState([])
    useEffect(()=>{
         AXIOS.get('http://localhost:9000/viewProduct').then((res)=>{
            setPphoto(res.data.images)

         })
    },[])

    
// const [pphoto1,setPphoto1]=useState([])
// const params=useParams()
// useEffect(()=>{
//     const id=params.id;
//      AXIOS.get('http://localhost:9000/pageEdit/${id}').then((res)=>{
//         setPphoto1(res.data.images)

//      })
// },[])

    const editValue=(idno)=>{
        AXIOS.get("http://localhost:9000/pageEdit",{
            params:{
                idnos:idno
            }
        }).then((res)=>{
            setPphoto(res.data.images)
        })
    }

    

  const dispatch = useDispatch();
  const [prid,setPrid]=useState([]);

    const addcarts=()=>{
    AXIOS.post("http://localhost:9000/cartcard").then((res)=>{
           alert("gdfg")
    })
    

      
    }
    
   
    return ( <>
    
     <Container>
        <Row className='justify-content-end'>
            <Col lg={2}>
            {/* <Cart/> */}
            </Col>
        </Row>
        <Row className="mt-2 grid gap-3" style={{width:"100%", height:"185px" , justifyContent: 'space-between',}}>
        {pphoto.map((ls)=>{
            return(
            <Col lg={3} className="p-3 mt-2 border rounded border-black">
            <img  src={'http://localhost:9000/'+ls.productphoto} alt='' width="200" height="250"/>
                    <div className="name">{ls.productname}</div>
                    <div>{ls.productstock} items left</div>
                       <div>Category : {ls.productcategory}</div> 
                       <div className="price">Price: ₹{ls.productprice}</div> 
                       {/* <div class="card-body">
                        <a href="#" class="btn btn-primary">View</a>
                        <a href="#" class="btn btn-primary">Add To Cart</a>
                       </div> */}
                       <div>
                        
                        <Button className="butn" type="button" onClick={addcarts}>Addcart
                        <img src={cartpic} alt='' onClick={(addcart)=>{alert(ls._id)}}/>
                        </Button>
                       
                       
                       
                       
                       <br/>
                       <Link className="viewbutn mt-2" to={`/edit/${ls._id}`}>
                        View <img src={eye} alt=''/> 
                                    </Link>
                       
                     
                       </div>
                      
                       
            </Col>
            )
        })}
        </Row>
     </Container>
    
                    
                   
                    
                        
   
                    
               
               
                  
                   
 
         
            
        
    </> );
}

export default Viewproduct;