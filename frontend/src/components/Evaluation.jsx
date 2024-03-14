import React from 'react';
import "./table.css";


const Evaluation = ({data}) => {
  return (
    <div>
      <h1>Evaluation Sheet</h1>
    <table class="table">
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
                    <tr key={item.rollNo}>
                    <td>{item.name}</td>
                    <td>{item.rollNo}</td>
                    <td>{item.idea}</td>
                    <td>{item.execution}</td>
                    <td>{item.viva}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br />
            <div className='btn-1'>
              <button type='onClick' className='btn'>Submit</button>
              <button type='onClick' className='btn'>Reselect</button>
            </div>
          </div>
        );
      }
      
      export default Evaluation;
               