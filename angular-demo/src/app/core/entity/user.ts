import { DateEntity } from './base-entity';
import { Role } from './role';

export class User extends DateEntity {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  profileImage?: string;
}
