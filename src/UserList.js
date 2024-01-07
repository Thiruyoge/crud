import { useState } from "react";

import React from 'react';
import axios from "axios";
function Users()
{

   
  let url = "https://jsonplaceholder.typicode.com/users";


  
  const [empno, setEmpno] = useState("");
  const [ename, setEname] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [empsArray, setEmpsArray] = useState( []);
   




    function getEmpButton_click()
    {
        axios.get(url).then(resData => {
        // console.log(resData.data.data);
         setEmpsArray(resData.data);
        })
    
    }

  
  


   

    function addEmpButton_click()
    {
        let empObj = { };
        empObj.id = empno;
        empObj.name = ename;
        empObj.email = mail;
        empObj.phone= phone;


    //   let tempArray = empsArray.slice(0);
         let tempArray = [...empsArray];   
        tempArray.push(empObj);

        setEmpsArray(tempArray);         
    }

    function deleteEmp_click(eno)
    {
        let tempArray = [...empsArray];   
        let index  = tempArray.findIndex( item => item.id === eno );
        tempArray.splice(index, 1);
        setEmpsArray(tempArray); 
    }

    function selectEmp_click(eno)
    {
        let tempArray = [...empsArray];   
        let empObj  = tempArray.find( item => item.id === eno );
       // alert(  JSON.stringify(empObj) );

       setEmpno(empObj.id);
       setEname(empObj.name);       
       setMail(empObj.email);       
       setPhone(empObj.phone);       
    }


    function  updateEmpButton_click(eno)
    {
       let updateEmp = { };

       updateEmp.id = empno;
       updateEmp.name = ename;
       updateEmp.email = mail;
       updateEmp.phone = phone;

       let tempArray = [...empsArray];   
       let index  = tempArray.findIndex( item => item.id === eno );
console.log(index);
tempArray[index] = updateEmp;

       setEmpsArray (tempArray);

    }


    let result = empsArray.map( (item,index) => {
       return (
       <tr class="table table-striped table-secondary">
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>

            <td>{item.phone}</td>
            <td>
                <button class="btn btn-sm btn-outline-primary" href="#"  onClick={() => { selectEmp_click(item.id)} }>Select</button> 
                <button class="btn btn-sm btn-outline-danger"href="#"  onClick={() => { deleteEmp_click(item.id)} }> Delete</button> 
                <button class="btn btn-sm btn-outline-warning"href="#" onClick={() => { updateEmpButton_click(item.id)}}>Update Students</button>            </td>
        </tr> )}
        );
    

    return (
        <>

           

<div class="container">



             <h3>CRUD</h3>
             <hr/>

              <input class="form-control" value={empno} placeholder="ID" onChange={(e) => setEmpno(e.target.value)} />
              <input class="form-control" value={ename} placeholder="Name" onChange={(e) => setEname(e.target.value)} />
              <input class="form-control" value={mail} placeholder="Email" onChange={(e) => setMail(e.target.value)} />
              <input class="form-control" value={phone} placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
              <br/>
              <br/>

              <input class="btn btn-sm btn-outline-primary" type="button" onClick={getEmpButton_click}  value="Get Students"  />
              <input class="btn btn-sm btn-outline-success" type="button" onClick={addEmpButton_click}  value="Add Students"  />
              <hr/>
             <table class="table table-striped" border="2">

             <tr class="table table-striped">
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>phone</th>
                    <th></th>
                </tr>

                {result}
             </table>

<hr/>
</div>

          
                
        </>)
}

export default Users;



