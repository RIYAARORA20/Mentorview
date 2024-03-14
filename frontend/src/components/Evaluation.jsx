import React, { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import "./table.css";


const Evaluation = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const {students} = location.state;
    const [data, setData] = useState([]);
    const [marks, setMarks] = useState([]);
    useEffect(() => {
        axios.post("http://localhost:8000/edit",{
            selected: students
        })
            .then((res) => {
                setData(res.data.response);
                setMarks(res.data.response);
                console.log(res);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
  return (
    <div>
      <h1>Evaluation Sheet</h1>
    <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Roll No.</th>
                    <th scope="col">Idea(10)</th>
                    <th scope="col">Execution(10)</th>
                    <th scope="col">Viva(10)</th>
                    
                </tr>
            </thead>
            <tbody id="tbody">
                {data.map((item)=>(
                    <tr key={item.Rollno}>
                    <td>{item.Name}</td>
                    <td>{item.Rollno}</td>
                    <td>{(item.Idea)?(item.Idea):(<input type='number' onChange={(e)=>{setMarks(...marks,)}}></input>)}</td>
                    <td>{(item.Execution)?(item.Execution):(<input type='number'></input>)}</td>
                    <td>{(item.Viva)?(item.Viva):(<input type='number'></input>)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br />
            <div className='btn-1'>
              <button type='onClick' className='btn'>Submit</button>
              {/* <Link to="/" state={{students:students}}> */}
                <button type='onClick' onClick={()=>navigation(-1)} className='btn'>Reselect</button>
                {/* </Link> */}
              </div>
          </div>
        );
      }
      
      export default Evaluation;
               