import axios from "./axios";

export const getInquestsRequest = () => axios.get("/inquest");

export const createInquestRequest = (inquest) => axios.post("/inquest", inquest);

export const updateInquestRequest = (id) =>axios.put(`/inquest/${inquest._id}`, inquest);

export const deleteInquestRequest = (id) => axios.delete(`/inquest/${id}`);

export const getInquestRequest = (id) => axios.get(`/inquest/${id}`);
