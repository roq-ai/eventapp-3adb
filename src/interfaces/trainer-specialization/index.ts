import { GetQueryInterface } from 'interfaces';

export interface TrainerSpecializationInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface TrainerSpecializationGetQueryInterface extends GetQueryInterface {
  id?: string;
}
