import axios from 'axios';

const url = 'http://localhost:5001/employee';

export const fetchEmployees = () => axios.get(url);
export const createEmployee = (newEmployee) => axios.post(url, newEmployee);
export const updateEmployee = (id, updatedEmployee) => axios.put(`${url}/${id}`, updatedEmployee);
export const deleteEmployee = (id) => axios.delete(`${url}/${id}`);
