import axios from "axios";

const API_URL = "http://localhost:5000";

export const getFees = () => axios.get(`${API_URL}/fees`);
export const getTransactions = () => axios.get(`${API_URL}/transactions`);
export const getCourses = () => axios.get(`${API_URL}/courses`);
export const getResults = () => axios.get(`${API_URL}/results`);