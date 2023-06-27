import React from 'react'
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { add } from './store/cartSlice';

function Product() {
    const dispatch = useDispatch();
    const [products,getProducts] = useState([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(data=>data.json())
        .then(result=>getProducts(result))
    },[]);
    const addToCart = (product)=>{
        dispatch(add(product))
    }
     const cards =  products.map((product)=>(
        <div className='col-md-3' style={{marginBottom :"10px"}}>
            <Card style={{ width: '18rem' }} className='h-100' key={product.id}>
                <div className='text-center'>
                <Card.Img variant="top" src={product.image} style={{width:'100px',height:'130px'}} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary" onClick={()=>addToCart(product)}>Add to Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ))
  return (
    <div className='row'>
        {console.log(products)}
        <h1>Product Dashboard</h1>
            {cards}
    </div>
  )
}

export default Product