import {Company} from './company';
import {Address} from './address';

export class Student {
  id: number;
  name: string;
  email: string;
  phone: number;
  website: string;
  posts: number[];
  address: Address;
  company: Company;
}
