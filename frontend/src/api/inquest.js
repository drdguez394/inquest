import axios from "./axios";

export const createInquestRequest = (inquest) => axios.post("/inquest/create", inquest);

export const getAllInquestsRequest = () => axios.get("/inquest/all");

export const getInquestsRequest = () => axios.get("/inquest");

export const getInquestRequest = (id) => axios.get(`/inquest/${id}`);

export const completeInquestRequest = (vote) => axios.post("/inquest/vote", vote);

export const updateInquestRequest = (id, inquest) =>axios.put(`/inquest/update/${id}`, inquest);

export const deleteInquestRequest = (id) => axios.delete(`/inquest/delete/${id}`);
