import { Role } from './role';

export class User {
  data:{
    id: number;
    img?: string;
    username: string;
    password: string;
    firstName?: string;
    lastName?: string;
    role: Role;
    email:string;
  }
  token: string;
}