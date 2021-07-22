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
  contact_id: string;
  type: {
    id: number;
    name: string;
  };
};

export type TState = {
  response: Tresponse[];
  error: null | NetworkError;
  loading: boolean;
};
