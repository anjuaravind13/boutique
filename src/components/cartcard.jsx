import './cart-card.css';
import React, { createContext, useReducer, useEffect, useState } from "react";
import arrow from './images/arrow.png';
import cart from './images/cart.png';
import Cart from './cart';
import minus from './images/minus.png';
import add from './images/add.png';
import { useSelector, useDispatch } from 'react-redux'
import { Container,Row,Col,Table } from 'react-bootstrap';
import AXIOS from 'axios';
import Navbr from "./navbr";
 
function Cartcard() {
//     const [dats,setDats]=useState([]);
//     useEffect(async()=>{
//         await AXIOS.get("http://localhost/cartcard",{
// params:{
//     value:sessionStorage.getItem("userid")
// }
//         }).then((res)=>{
//             setDats(res.data.result)
//         })
        
        
//     })

const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

// const [pcategory,setCt]=useState("")
// const [pname,setPname]=useState("")
// const [pdate,setPstock]=useState("")
// const [pprice,setPprice]=useState("")
// const userid= sessionStorage.getItem("userid");
// const [pphoto,setPphoto]=useState({preview:'',data:''});
// const productphotoSet=(e)=>{
//     const img={
//         preview:URL.createObjectURL(e.target.files[0]),
//         data:e.target.files[0]
//     }
//     setPphoto(img)
   
// }

// const handleout=async(e)=>{  
      
//     alert("hai")
//     const formdata=new FormData()
//     formdata.append("file",pphoto.data)
//     formdata.append('pname',pname)
//     formdata.append('pcategory',pcategory)
//     formdata.append('pprice',pprice)
//     formdata.append('pdate',pdate)
//     formdata.append('userid',userid)

//    AXIOS.post("http://localhost:9000/cardcart/",formdata,{'content-type':'multipart/form-data'}).then((res)=>{
//         alert(res.data.msg)
// })


    const count = useSelector((state) => state.counter.count)
    return ( <>
    <Navbr/>
        <header>

        <div className="continue-shopping">
            <img src={arrow} alt="arrow" className="arrow-icon"/>
            <h3>continue shopping</h3>
                                     </div>

        <div> 
            <Cart/>
                </div>

        </header>

        <section className="main-cart-section">

            <h1>shopping cart</h1>

            <p className="total-items"> 
                                        you have 
                                            <span className="total-items-count"> 
                                                 { count }  
                                                    </span>
                                                          items in your shopping cart
                                                                                    </p>
        
        <div className="cart-items-container">
            <div className="item-info">
                {/* <Container>
                    <Row>
                        <Col>
                        <Table>
                            <thread>
                                <tr>
                                    <th>Image</th>
                                    <th>Description</th>
                                    <th>Category</th>
                                    <th>Date</th>
                                    <th>Price</th>
                                </tr>
                            </thread>
                        </Table>
                        </Col>
                    </Row>
                </Container> */}

                <div className="product-img"> 
                    <img src=''></img>
                </div>

                <div className="title">
                    <h2> 
                        {/* {productname} */}
                    </h2>
                    <p>
                        {/* {productcategory} */}
                    </p>
                </div> 

                <div className="date">
                <h1>Current date is {date}</h1>
                </div>

                <div className="add-minus-quantity">
                    <i className="fa fa-minus">-</i>
                    <input type="text" placeholder="1"></input>
                    <i className="fa fa-plus add">+</i>
                </div>

                <div className="price">
                    
                    <h3>
                        {/* {price} */}
                    </h3>
                </div>

                <hr/>
            </div>
            </div>
        
            <div className="card-total">
                <h3>Cart Total : <span></span></h3>
                <button>Checkout</button>
            </div>

        
        </section>
    </> );
}

export default Cartcard;