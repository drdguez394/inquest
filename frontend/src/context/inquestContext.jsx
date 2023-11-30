import { createContext, useContext, useState } from "react";
import { createInquestRequest, deleteInquestRequest, getInquestsRequest, getInquestRequest, updateInquestRequest, } from "../api/inquest";

const InquestContext = createContext();

export const useInquests = () => {
  const context = useContext(InquestContext);
  if (!context) throw new Error("useInquests must be used within a TnquestProvider");
  return context;
};

export function InquestProvider({ children }) {
  const [inquests, setInquests] = useState([]);

  const getInquests = async () => {
    const res = await getInquestsRequest();
    setInquests(res.data);
  };

  const deleteTnquest = async (id) => {
    try {
      const res = await deleteInquestRequest(id);
      if (res.status === 204) setInquests(inquests.filter((tnquest) => tnquest._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const createInquest = async (tnquest) => {
    try {
      const res = await createInquestRequest(tnquest);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTnquest = async (id) => {
    try {
      const res = await getInquestRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateTnquest = async (id, tnquest) => {
    try {
      await updateInquestRequest(id, tnquest);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <InquestContext.Provider
      value={{
        inquests,
        getInquests,
        deleteTnquest,
        createInquest,
        getTnquest,
        updateTnquest,
      }}
    >
      {children}
    </InquestContext.Provider>
  );
}
