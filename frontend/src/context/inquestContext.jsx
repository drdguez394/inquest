import { createContext, useContext, useState } from "react";
import { createInquestRequest, getInquestsRequest, completeInquestRequest } from "../api/inquest";

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

  const getInquests = async () => {
    try {
      const res = await getInquestsRequest();
      setInquests(res.data);
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

  return (
    <InquestContext.Provider value={{
      inquests,
      createInquest,
      getInquests,
      completeInquest
    }}>
      {children}
    </InquestContext.Provider>
  );
}