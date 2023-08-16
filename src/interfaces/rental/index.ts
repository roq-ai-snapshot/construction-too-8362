import { GuestInterface } from 'interfaces/guest';
import { ToolInterface } from 'interfaces/tool';
import { GetQueryInterface } from 'interfaces';

export interface RentalInterface {
  id?: string;
  start_date: any;
  end_date?: any;
  total_price?: number;
  tool_id?: string;
  guest_id?: string;
  created_at?: any;
  updated_at?: any;
  guest_guest_rental_idTorental?: GuestInterface[];
  tool?: ToolInterface;
  guest_rental_guest_idToguest?: GuestInterface;
  _count?: {
    guest_guest_rental_idTorental?: number;
  };
}

export interface RentalGetQueryInterface extends GetQueryInterface {
  id?: string;
  tool_id?: string;
  guest_id?: string;
}
