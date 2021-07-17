import {useEffect, useState} from 'react';

export default function useContactsListData() {
  const [ContactsListData, setContactsListData] = useState<Array<{}>>([]);

  useEffect(() => {
    fetch(`https://interaction-history.herokuapp.com/contacts`)
      .then(res => res.json())
      .then(
        result => {
          setContactsListData(result);
        },
        error => {
          console.warn(error);
        },
      );
  }, []);

  return [ContactsListData];
}
