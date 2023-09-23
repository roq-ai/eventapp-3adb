import { BookingInterface } from 'interfaces/booking';
import { TeamInterface } from 'interfaces/team';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EventInterface {
  id?: string;
  name: string;
  location: string;
  start_time: any;
  end_time: any;
  organizer_id: string;
  created_at?: any;
  updated_at?: any;
  participation_rewards?: string;
  booking_booking_event_idToevent?: BookingInterface[];
  team?: TeamInterface[];
  user?: UserInterface;
  booking_event_participation_rewardsTobooking?: BookingInterface;
  _count?: {
    booking_booking_event_idToevent?: number;
    team?: number;
  };
}

export interface EventGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  location?: string;
  organizer_id?: string;
  participation_rewards?: string;
}
