import React from 'react'
import Menu from './Menu'
import data from '../data/products.json'

const Product = (props) => {
  const handleClick=(data)=>{
    props.handleClick(data)
  }
  return (
    <div className='grid grid-cols-5 gap-4 pr-2'>
      {
        data.map((data, key) => {
          return (
            <button className='p-0'>

              <Menu key={key} handleClick={(data)=>handleClick(data)} data={data} name={data.name} img={data.img} price={data.price} />
            </button>
          )
        })
      }

    </div>
  )
}

export default Product
