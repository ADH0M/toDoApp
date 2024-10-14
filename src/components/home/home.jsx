import React, { useEffect, useState } from 'react'
import axios from 'axios';

const mData =[
  {
      "id": 1,
      "productName": "biscts",
      "filename": "adfe",
      "category": "dfaf  ",
      "image_path": "adfadf",
      "quantity": 12
  },
  {
      "id": 2,
      "productName": "chips",
      "filename": "2024-09-06T13-26-09.669Z.jpg",
      "category": "aaaaaaaaa",
      "image_path": "F:\\Node js\\code\\express js\\E-shop\\images\\2024-09-06T13-26-09.669Z.jpg",
      "quantity": 15
  },
  {
      "id": 3,
      "productName": "chips",
      "filename": "2024-09-06T13-29-35.333Z.jpg",
      "category": "aaaaaaaaa",
      "image_path": "F:\\Node js\\code\\express js\\E-shop\\images\\2024-09-06T13-29-35.333Z.jpg",
      "quantity": 15
  },
  {
      "id": 7,
      "productName": "molto",
      "filename": "2024-09-06T16-11-21.631Z.jpg",
      "category": "sss",
      "image_path": "F:\\Node js\\code\\express js\\E-shop\\images\\2024-09-06T16-11-21.631Z.jpg",
      "quantity": 12
  }
]

const Home = () => {
  const [file ,setFile] = useState(null);
  const [product ,setProduct] = useState(null);
  const [qunt ,setQunt] = useState(null);
  const [category ,setCategory] = useState(null);
  const [Dataa ,setData] = useState([])
  console.log(Dataa);

  const getData = ()=>{
    try {
      axios.get('http://localhost:3009/getproduct')
          .then(res => setData(res.data));
  } catch (error) {
      console.error('Error fetching data:', error);
      // Optionally display an error message to the user
  }
  }
  useEffect(() => {
}, [setData]);



// console.log(Dataa);

const upload = async () => {
    try {
        const formData = new FormData();
        formData.append('image', file);
        formData.append('productName', product);
        formData.append('quantity', qunt);
        formData.append('category', category);
        await axios.post('http://localhost:3009/auth/prodect', formData);
        // Handle successful upload (e.g., clear form fields, show success message)
    } catch (error) {
        console.error('Error uploading data:', error);
        // Optionally display an error message to the user
    }
};

  
  return (
    <>
    <div className='flex flex-col gap-7 text-gray-900 justify-center items-center pt-4'>

        <label htmlFor="name"    >productName</label>
        <input className='text-gray-900 p-2' type="text" onChange={(e)=>{setProduct(e.target.value)}} name="productName" id="name" />
        <label htmlFor="name"    >category</label>
        <input className='text-gray-900 p-2' type="text" onChange={(e)=>{setCategory(e.target.value)}} name="productName" id="name" />
        <label htmlFor="category">Qountety</label>
        <input className='text-gray-900 p-2' type="text" onChange={(e)=>{setQunt(e.target.value)}} name="Qountety" id="qountety" />
        <label htmlFor="image"   >image</label>
        <input className='text-gray-900 p-2' type="file" onChange={(e)=>{ setFile(e.target.files[0])}} name="image" id="image" />
        <button type='button' onClick={upload}>submit</button>
    </div>
  
    <div>
          data:{ Dataa.length === 0 ? <p>no data</p>:
            Dataa.action.map((item)=>( 
              <>
              <p>{item.image_path}</p>
              {/* <img src={`http://localhost:3009/product/${item.filename}`} alt="" /> */}
              </>
            ))
          }
    </div>
    </>
  
  )
}

export default Home
