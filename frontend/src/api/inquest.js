import axios from "./axios";

export const createInquestRequest = (inquest) => axios.post("/inquest/create", inquest);

export const getAllInquestsRequest = () => axios.get("/inquest/all");

export const getInquestsRequest = () => axios.get("/inquest");

export const completeInquestRequest = (vote) => axios.post("/inquest/vote", vote);

export const updateInquestRequest = (id) =>axios.put(`/inquest/${inquest._id}`, inquest);

export const deleteInquestRequest = (id) => axios.delete(`/inquest/delete/${id}`);

export const getInquestRequest = (id) => axios.get(`/inquest/${id}`);
