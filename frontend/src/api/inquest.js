import axios from "./axios";

export const getInquestsRequest = async () => axios.get("/inquest");

export const createInquestRequest = async (inquest) => axios.post("/inquest", inquest);

export const updateInquestRequest = async (inquest) =>axios.put(`/inquest/${inquest._id}`, inquest);

export const deleteInquestRequest = async (id) => axios.delete(`/inquest/${id}`);

export const getInquestRequest = async (id) => axios.get(`/inquest/${id}`);
