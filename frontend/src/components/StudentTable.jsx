import React, { useEffect, useState } from 'react';
import './table.css';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const StudentTable = () => {
    const [data1, setData] = useState([]);
    const [students, setStudents] = useState([]);
    const navigate= useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/get")
            .then((res) => {
                setData(res.data.response);
                console.log(res);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    
    // console.log(data1);

    // const handleCheckboxChange = (index) => {
    //     const isChecked = selectedCheckboxes.includes(index);

    //     if (isChecked) {
    //         setSelectedCheckboxes(selectedCheckboxes.filter((item) => item !== index));
    //     } else {
    //         if (selectedCheckboxes.length < 4) {
    //             setSelectedCheckboxes([...selectedCheckboxes, index]);
    //         }
    //     }
    // };

    const addOrRemove = (name) => {
        const newStudents = [...students];
        const index = newStudents.indexOf(name);
        if (index === -1) {
          newStudents.push(name);
        } else {
          newStudents.splice(index, 1);
        }
        setStudents(newStudents);
        console.log(students)
      }
    return (
        <>
            <div>
                <div className='heading'>
                    <h1>List Of Students</h1>
                </div>
                <div className='first'>
                    <span className='second' style={{ width: "35px" }}>
                        <p>Filter:</p>
                    </span>
                    <span className='second'>
                        <input type='checkbox' id='ev'></input>
                        <label for='ev'>Evaluated</label>
                    </span>
                    <span className='second'>
                        <input type='checkbox' id='nv'></input>
                        <label for="nv">Not Evaluated</label>
                    </span>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" className='check'>Select</th>
                            <th scope="col">Name</th>
                            <th scope="col">Roll No.</th>
                            <th scope="col">Evaluation</th>
                        </tr>
                    </thead>
                    <tbody id="tbody">
                        {data1.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <input
                                        type='checkbox'
                                        className='tick'
                                        // checked={selectedCheckboxes.includes(index)}
                                        onChange={() => addOrRemove(item.Rollno)}
                                        // onChange={() => handleCheckboxChange(index)}
                                        // disabled={
                                        //     selectedCheckboxes.length >= 4 &&
                                        //     !selectedCheckboxes.includes(index)
                                        // }
                                    ></input>
                                </td>
                                <td>{item.Name}</td>
                                <td>{item.Rollno}</td>
                                <td>{(item.Viva && item.Execution && item.Idea)?"Done":"Pending"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br></br>
                <div className='btn-1'>
                    <button type='onClick' className='btn'>Submit</button>
                    <Link to="/edit" state={{students:students}}>
                        <button onClick={()=>navigate("/")} className='btn'>Go To Evaluation</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default StudentTable;
