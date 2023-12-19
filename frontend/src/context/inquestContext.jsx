import { createContext, useContext, useState } from "react";
import { createInquestRequest, getInquestsRequest } from "../api/inquest";

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
      setInquests(res, data)
    } catch (error) {
      console.log(error)
    }
  };

  const getInquests = async () => {
    const res = await getInquestsRequest();
    console.log(res);
  }

  return (
    <InquestContext.Provider value={{
      inquests,
      createInquest,
      getInquests
    }}>
      {children}
    </InquestContext.Provider>
  );
}