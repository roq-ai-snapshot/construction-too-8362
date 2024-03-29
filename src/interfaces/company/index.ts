import { AdminInterface } from 'interfaces/admin';
import { ToolInterface } from 'interfaces/tool';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  address?: string;
  phone_number?: string;
  email?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  admin?: AdminInterface[];
  tool?: ToolInterface[];
  user?: UserInterface;
  _count?: {
    admin?: number;
    tool?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  phone_number?: string;
  email?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
