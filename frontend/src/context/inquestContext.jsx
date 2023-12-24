import { createContext, useContext, useState } from "react";
import { createInquestRequest, getAllInquestsRequest, getInquestsRequest, getInquestRequest, completeInquestRequest, updateInquestRequest, deleteInquestRequest } from "../api/inquest";

const InquestContext = createContext();

export const useInquests = () => {
  const context = useContext(InquestContext);

  if (!context) {
    throw new Error("useInquests debería estar dentro de InquestProvider");
  }

  return context;
}

export function InquestProvider({ children }) {

  const [inquests, setInquests] = useState([]);

  const createInquest = async (inquests) => {
    try {
      const res = await createInquestRequest(inquests);
      setInquests(res, data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllInquests = async () => {
    try {
      const res = await getAllInquestsRequest();
      setInquests(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getInquests = async () => {
    try {
      const res = await getInquestsRequest();
      setInquests(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getInquest = async (id) => {
    try {
      const res = await getInquestRequest(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateInquest = async (id, inquest) => {
    try {
      await updateInquestRequest(id, inquest)
    } catch (error) {
      console.log(error);
    }
  };

  const completeInquest = async (vote) => {
    try {
      const res = await completeInquestRequest(vote);
      setInquests(res, data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteInquest = async (id) => {
    try {
      const res = await deleteInquestRequest(id);
      if (res.status === 204) {
        setInquests(inquests.filter((inquest) => inquest._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <InquestContext.Provider value={{
      inquests,
      createInquest,
      getAllInquests,
      getInquests,
      getInquest,
      completeInquest,
      updateInquest,
      deleteInquest
    }}>
      {children}
    </InquestContext.Provider>
  );
}