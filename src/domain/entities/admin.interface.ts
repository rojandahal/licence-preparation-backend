import { BaseEntity } from '.';

export class AdminEntity extends BaseEntity {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  lastLoginAt: Date;
}
