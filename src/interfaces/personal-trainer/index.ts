import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PersonalTrainerInterface {
  id?: string;
  name: string;
  specialty: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface PersonalTrainerGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  specialty?: string;
  user_id?: string;
}
