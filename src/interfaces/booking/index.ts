import { EventInterface } from 'interfaces/event';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  booking_time: any;
  user_id: string;
  event_id: string;
  created_at?: any;
  updated_at?: any;
  event_event_participation_rewardsTobooking?: EventInterface[];
  user?: UserInterface;
  event_booking_event_idToevent?: EventInterface;
  _count?: {
    event_event_participation_rewardsTobooking?: number;
  };
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  event_id?: string;
}
