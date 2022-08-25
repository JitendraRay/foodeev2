import React from 'react'




const Invoice = (props) => {
  const handleDelete = (data) => {
    props.handleDelete(data);

  }
  let total = 0
  return (
    <div className=' w-full p-4'>

      <h1 className='text-2xl text-center font-bold'>Invoice</h1>
      <div className="text-center p-3 border-2 border-black mt-2">
        <h2 className='text-2xl font-bold'>CWS food bhandar</h2>
        <h5 className='text-gray-800 text-sm font-semibold'>Thana Chowk, Purnea - 854301</h5>
      </div>

      <table className=' w-full justify-around text-center mt-2'>
        <thead>
          <tr className='border border-black'>
            <th>Description</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody className=''>

          {
            props.orderData.map((data, key) => {
              total = total + data.price * data.qty
              return (
                (data.qty > 0) ?
                  <>
                    <tr className='' key={key}>
                      <td>{data.name}</td>
                      <td>{data.qty}</td>
                      <td>{data.price * data.qty}</td>
                      <td ><button className=' hover:bg-red-900 bg-red-600 px-2 py-1 text-white rounded-md' onClick={() => handleDelete(data)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                        </svg>
                      </button></td>
                    </tr>
                  </> : null
              )
            })
          }
        </tbody>

      </table>
      <div className="text-end border-t-2 border-black mt-4">
        <h1 className='text-red-900 text-2xl font-bold'>Total {total}/-</h1>
      </div>
    </div>
  )
}

export default Invoice