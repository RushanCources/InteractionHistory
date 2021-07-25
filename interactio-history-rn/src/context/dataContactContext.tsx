import React, { useState } from 'react';

interface IDataContactContext {
  dataContact: {
    id?: string;
    firstName?: string;
    lastName?: string;
    mobile?: string;
    work?: string;
    skype?: string;
    email?: string;
    jobTitle?: string;
    account?: {
      id: string;
      name: string;
    };
  };
  toggleDataContact: (data: {}) => void;
}

export const dataContactContext = React.createContext<IDataContactContext>({
  dataContact: {},
  toggleDataContact: () => { },
});

export function DataContactContextProvider({ children }: {children: React.ReactNode}) {
  const [dataContact, toggleDataContact] = useState({})
  const value = { dataContact, toggleDataContact }

  return (
    <dataContactContext.Provider value={value}>
      {children}
    </dataContactContext.Provider>
  )
}