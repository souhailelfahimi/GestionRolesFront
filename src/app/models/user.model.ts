import { Role } from './role.model';

export class User {

  public id: number;
  public username: string;
  public password: string;
  public roles:Role[]=[];
}
