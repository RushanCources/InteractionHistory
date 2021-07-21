import {useEffect, useState} from 'react';

export default function useContactsListData() {
  const [ContactsListData, setContactsListData] = useState<Array<{}>>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://interaction-history.herokuapp.com/contacts`)
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setContactsListData(result);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        });
  }, []);

  return [{ContactsListData, isLoaded, error}];
}