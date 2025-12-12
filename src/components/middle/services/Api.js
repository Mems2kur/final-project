import axios from "axios";

export const getFees = () => axios.get("/api/fees").then(res => res.data);
export const getTransactions = () => axios.get("/api/transactions");
export const getCourses = () => axios.get("/api/courses");
export const getResults = () => axios.get("/api/results");
