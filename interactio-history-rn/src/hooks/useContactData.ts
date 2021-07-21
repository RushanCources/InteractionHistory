import {useEffect, useState} from 'react';

interface IContactData {
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
}

export default function useContactData(id: string | undefined) {
  const [ContactData, setContactData] = useState<IContactData>({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://interaction-history.herokuapp.com/contacts/${id}`)
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setContactData(result);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        },
      );
  }, []);

  return [{ContactData, isLoaded, error}];
}
