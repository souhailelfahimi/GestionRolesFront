import { Permession } from './permession.model'

export class Role {
  public id: number;
  public role: string;
  public permessions: Permession[]= [];

}
