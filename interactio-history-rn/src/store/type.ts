export type TNetworkErrorParams = {
  status: number;
  message: string;
};

export class NetworkError extends Error {
  readonly status: number;

  constructor({ message, status = 502 }: TNetworkErrorParams) {
    super(message);
    this.status = status;
    this.name = this.constructor.name;
  }
}

export type Tresponse = {
  id: number;
  date: string;
  description: string;
  contact_id?: string;
  type: {
    id: number;
    name: string;
  };
};

export type TresponseProps = {
  data: Tresponse;
};

export type TState = {
  response: Tresponse[];
  error: null | NetworkError;
  loading: boolean;
  currentContact: string;
};

export type TStateType = {
  interactions: TState;
};

export type TContactDetailsState = {
  response: TContactData;
  error: null | NetworkError;
  loading: boolean;
  methodCommunication?: string;
};

export type TContactDetailsType = {
  contactDetails: TContactDetailsState;
};

export type TContactData = {
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

export type TContactsListState = {
  response: TContactData[];
  error: null | NetworkError;
  loading: boolean;
};

export type IContactsListType = {
  contactsList: TContactsListState;
};

export type TContactsRecents = {
  id?: string;
  date: string;
  description: string;
  contact_id: string;
  type: { 
    id: string; 
    name: string 
  };
};

export type TContactsRecentsState = {
  response: TContactsRecents[];
  error: null | NetworkError;
  loading: boolean;
};

export type TContactsRecentsType = {
  contactsRecents: TContactsRecentsState;
};
