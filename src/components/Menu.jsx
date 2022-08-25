import React from 'react'

const Menu = (props) => {
  const handleClick=(data)=>{
    props.handleClick(data);
  }
  
  return (
    <div className='text-white w-44 text-center rounded-lg pb-4 bg-slate-400 ' onClick={()=>handleClick(props.data)}>
      <img src={props.img} style={{ width: "180px", height: "150px" }} className="object-cover rounded-t-lg" alt={props.name} />
      <div className="mt-2">

        <h4 className=' font-semibold text-2xl text-gray-700' >{props.name}</h4>
        <h5 className='font-semibold text-xl text-red-900'>Price/- {props.price}</h5>
      </div>
    </div>
  )
}

export default Menu
