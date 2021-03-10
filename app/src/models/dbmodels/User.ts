import {Table, Column, Model} from 'sequelize-typescript';

@Table
export class User extends Model {

  @Column
  login?: string;
  @Column
  avatarUrl?: string;
  @Column
  url?: string;
  @Column
  reposUrl?: string;
}