import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Apps from './components/App';

function App() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3009/upload')
      .then(res => setData(res.data.action)) // Access the data property
      .catch(error => console.error('Error fetching data:', error)); // Handle errors
  }, []); // Add dependency array

  console.log(data);

  const upload = () => {
    const form_data = new FormData();
    form_data.append('image', file);
    axios.post('http://localhost:3009/upload', form_data)
      .then(response => console.log('File uploaded successfully:', response))
      .catch(error => console.error('Error uploading file:', error)); // Handle errors
  };

  return (
    <div className="App">
      {/* <input type='file' onChange={(e) => setFile(e.target.files[0])} />
      <button type='button' onClick={upload}>Upload</button> */}
      <div>
        <Apps/>
      </div>
    </div>

  );
}

export default App;
