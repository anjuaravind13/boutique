import React from 'react';
import {Button,Container,Row,Col}from'react-bootstrap'
import { useState,useEffect } from 'react';
import AXIOS from'axios'
import './product-list.css';
import {Link, useParams} from 'react-router-dom';
import cartpic from './images/cart1.png';
import eye from './images/eye.png';
import ReactPaginate from 'react-paginate';
import Categoryreg from "./categoryreg";
import Productreg from "./productreg";

function Productlist() {

const [pphoto,setPphoto]=useState([])
    // useEffect(()=>{
       
    //      AXIOS.get('http://localhost:9000/productlist').then((res)=>{
    //         setPphoto(res.data.images)

    //      })
    // },[])

    
const [pphoto1,setPphoto1]=useState([])
const params=useParams()
useEffect(()=>{
    
    const id=params.id;
     AXIOS.get(`http://localhost:9000/pageEdit/${id}`).then((res)=>{
        setPphoto1(res.data.images)

     })
},[])
    const editValue=(idno)=>{
        AXIOS.get("http://localhost:9000/pageEdit",{
            params:{
                idnos:idno
            }
        }).then((res)=>{
            setPphoto(res.data.images)
        })
    }

    const addcart=()=>{
        alert("addcart")
    }

    // const allItems =()=>{
    //     const [searchTerm,setSearchTerm]= useState("");
    //     const [pageNumber, setPageNumber]=useState(0)
    //     const productPerPage = 8
    //     const visitedPage =pageNumber * productPerPage
    //     const displayPage = products.slice(visitedPage, visitedPage + productPerPage)
    // }
    return ( <>
    
     <Container>
        <Row className="justify-content-center mt-3 " style={{width:"100%", height:"185px"}}>
        {pphoto1.map((ls)=>{
            return(
                
            <Col lg={3} className="p-3 mt-2 border">
            <img  src={'http://localhost:9000/'+ls.productphoto} width="200" height="250"/>
                    <div class="name">{ls.productname}</div>
                    <div>{ls.productstock} items left</div>
                       <div>Category : {ls.productcategory}</div> 
                       <div class="price">Price: ₹{ls.productprice}</div> 
                       {/* <div class="card-body">
                        <a href="#" class="btn btn-primary">View</a>
                        <a href="#" class="btn btn-primary">Add To Cart</a>
                       </div> */}
                       <div>
                       {/* <button type="button">Click Me!</button>
                        <Button type="button" onClick={addcart}>Addcart</Button> */}
                       <img src={cartpic} onClick={()=>{alert(ls._id)}}/>

                       <Link to={`/edit/`+ls._id}>
                                        <img src={eye} /> 
                                    </Link>
                       
                     
                       </div>
                      
                       
            </Col>
            )
        })}
        </Row>
     </Container>
    
                    
                   
                    
                        
   
                    
               
               
                  
                   
 
         
            
        
    </> );
}

export default Productlist;