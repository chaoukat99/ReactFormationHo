import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Navbar from './Navbar'
function ProductList() {

    const products=[
        {id:1, name:"Iphone", price:1000, image:"./images/tiger.jpg"},
        {id:2, name:"Samsung", price:800, image:"./images/tiger.jpg"},
        {id:3, name:"Nokia", price:500, image:"./images/tiger.jpg"},
        {id:4, name:"Sony", price:600, image:"./images/tiger.jpg"},
    ]


  
  return (
    <>
    <Navbar/>
    <h1 className='text-center'>List of Products</h1>


<div className="d-flex justify-content-center flex-wrap gap-5">

    {products.length>0?products.map((el,i)=>{
        return (<div className="card" style={{ width: "18rem" }} key={i}>
            <img src={el.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{el.name}</h5>
              <p className="card-text">
                Price: {el.price} $
              </p>
              <a href="#" className="btn btn-primary">
                Order Now
              </a>
            </div>
          </div>
          )
    }):<h1 className='alert alert-danger'>No Products</h1>}
</div>
    </>
  )
}

export default ProductList