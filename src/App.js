import { useState } from "react";

import Users from "./UserList";

function  App()
{  
    const [res, setMessage] = useState("");
    const [message,  setResult] =  useState("");

    function  buttonClick()
    {  
       var txtObj1 = document.getElementById("t1");
       var txtObj2 = document.getElementById("t2");        
       var txtObj3 = document.getElementById("t3");        

       setMessage("Product Name:" + txtObj1.value);  
       setResult("Total Value" + txtObj2.value * txtObj3.value);  


    }


    

    return (
        <div>

           
<Users/>

{/* <Stud/> */}


          {/* <Table /> */}

          <hr/>

          



        </div>
    );
}


export default App;
