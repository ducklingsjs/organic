import {Attribute, Model} from '@datx/core';

export class User extends Model {
  static type = 'user';

  @Attribute({isIdentifier: true})
  public id!: string;
}
