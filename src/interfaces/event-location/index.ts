import { GetQueryInterface } from 'interfaces';

export interface EventLocationInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface EventLocationGetQueryInterface extends GetQueryInterface {
  id?: string;
}
