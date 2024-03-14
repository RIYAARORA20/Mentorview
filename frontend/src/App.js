import './App.css';
import Table from './components/Table';
import Evaluation from './components/Evaluation';
import React, {useEffect, useState} from 'react';


function App() {
  const [data, setData] = useState([]);
  // const [data2, setData2]=useState([]);

  useEffect(() => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then((response) => response.json())
      .then((myjson) => {
        setData(myjson);
      })
  }, []);

  // useEffect(() => {
  //   fetch('data2.json', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     }
  //   }).then((response) => response.json())
  //     .then((myjson) => {
  //       setData2(myjson);
  //     })
  // }, []);
  return (
    <div>
      <Table data={data}/>
      <Evaluation data={data} />
    </div>
  );
}

export default App;
