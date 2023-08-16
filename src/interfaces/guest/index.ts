import { RentalInterface } from 'interfaces/rental';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface GuestInterface {
  id?: string;
  user_id?: string;
  phone_number?: string;
  address?: string;
  email?: string;
  rental_id?: string;
  created_at?: any;
  updated_at?: any;
  rental_rental_guest_idToguest?: RentalInterface[];
  user?: UserInterface;
  rental_guest_rental_idTorental?: RentalInterface;
  _count?: {
    rental_rental_guest_idToguest?: number;
  };
}

export interface GuestGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  phone_number?: string;
  address?: string;
  email?: string;
  rental_id?: string;
}
