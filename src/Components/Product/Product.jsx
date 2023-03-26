import React,{useContext} from 'react'
import ProductCard from '../ProductCard/ProductCard';
import { contextData } from '../../Context';
import "./product.scss"

const Product = () => {

  const data = useContext(contextData);


  return (
    <div className='product-section'>
    <h1 style={{
        paddingTop:'20px',
        fontWeight:'600',
        width:'100%',
        textAlign:'center',
        fontSize:'3rem'

    }}>Our Products</h1>
    <div style={{
        display:"flex",
        flexWrap:'wrap',
        justifyContent:'space-around',
        width:'100%'
      }}>

      <ProductCard arr={data.products}/>
      </div>
  </div>
  )
}

export default Product