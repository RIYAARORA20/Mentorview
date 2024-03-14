import React from 'react'
import './table.css';

const Table = ({data}) => {
    console.log(data);
  return (
    <>
    <div>
        <div className='heading'>
       <h1>List Of Students</h1>
       </div>
       <div className='first'>
        <span className='second' style={{width:"35px"}}>
        <p>Filter:</p>
        </span>
        <span className='second'>
            <input type='checkbox' ></input>
            <p>Evaluated</p>
            </span>
            <span className='second'>
            <input type='checkbox'></input>
            <p>Not Evaluated</p>
            </span>
       </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col" className='check'>Select</th>
                    <th scope="col">Name</th>
                    <th scope="col">Roll No.</th>
                    <th scope="col">Evaluation</th>
                </tr>
            </thead>
            <tbody id="tbody">
                {data.map((item)=>(
                    <tr>
                    <input type='checkbox' className='tick'></input>
                    <td>{item.name}</td>
                    <td>{item.rollNo}</td>
                    <td>bjs</td>
                </tr>
                ))}
                    
                    
            </tbody>
        </table>
        <br></br>
        <div className='btn-1'>
        <button type='onClick' className='btn'>Submit</button>
        <button type='onClick' className='btn'>Go To Evaluation</button>
        </div>
    </div>
    
    </>
  )
}

export default Table;
