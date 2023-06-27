import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { remove } from './store/cartSlice';
import Card from 'react-bootstrap/Card';

function Cart() {
    const dispatch = useDispatch()
    const cart = useSelector(state=>state.cart)
    const deleted = (id)=>{
        dispatch(remove(id));
    }
  return (
    <div className='row'>
        
        { cart.map((product)=>(
        <div className='col-md-3' style={{marginBottom :"10px"}}>
            <Card style={{ width: '18rem' }} className='h-100' key={product.id}>
                <div className='text-center'>
                <Card.Img variant="top" src={product.image} style={{width:'100px',height:'130px'}} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <Button variant="danger" onClick={()=>deleted(product.id)}>Remove from  Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ))}
    </div>
  )
}

export default Cart