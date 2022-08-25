
import { useState } from 'react';
import './App.css';
import Invoice from './components/Invoice';
import Navbar from './components/Navbar';
import Product from './components/Product';
function App() {
  const [orderData, setOrderData] = useState([]);
  const handleClick = (data) => {
    // console.log("hello this is final"+data.name)
    let CheckArray = orderData.find((item) => item.name === data.name);
    if (CheckArray === undefined) {
      setOrderData([...orderData, { name: data.name, qty: 1, price: data.price }]);

    }
    else {
      setOrderData(orderData.map((item) => item.name === data.name ? { ...item, qty: item.qty + 1 } : item));
    }
    console.log(orderData);
  }

  const handleDelete = (data) => {

    setOrderData(orderData.map((item) => item.name === data.name ? { ...item, qty: item.qty - 1 } : item));


  }
  return (<>
    <Navbar />
    <div className="flex bg-black w-full h-full space-x-6 ">
      <div className="flex w-1/3 h-5/6 bg-slate-300 ml-6 mt-3 rounded-md justify-center">
        <Invoice orderData={orderData} handleDelete={(data) => handleDelete(data)} />
      </div>
      <div className="flex w-2/3 mt-3 rounded-md ">
        <Product handleClick={(data) => handleClick(data)} />

      </div>
    </div>
  </>
  );
}

export default App;
