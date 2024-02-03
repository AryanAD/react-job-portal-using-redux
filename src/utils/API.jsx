import axios from "axios";

export const apiText = axios.create({
  baseURL: "http://localhost:3000/api/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const apiImage = axios.create({
  baseURL: "http://localhost:3000/api/",
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
