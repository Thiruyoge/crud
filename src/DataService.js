
import axios from 'axios';

let dataServiceObj = {};

let url = "https://jsonplaceholder.typicode.com/users";


dataServiceObj.getAllEmployees = function()
{	
    return axios.get(url);
};

dataServiceObj.getEmployeeById = function(eno)
{	
    console.log(url+eno);
    return axios.get(url + eno);
};

dataServiceObj.addEmployee = function(empObj)
{	
    return axios.post(url, empObj);
};

dataServiceObj.updateEmployee = function(empObj)
{	
    return axios.put(url + empObj.id,   empObj);
};

dataServiceObj.deleteEmployee = function(eno)
{	
    return axios.delete(url + eno);
};

export default dataServiceObj;
	
	