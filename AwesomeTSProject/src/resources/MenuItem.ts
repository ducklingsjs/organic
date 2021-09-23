import {Attribute, Model} from '@datx/core';

export class MenuItem extends Model {
  static type = 'menu_item';

  @Attribute({isIdentifier: true})
  public id!: string;

  @Attribute({isIdentifier: true})
  public name!: string;

  @Attribute({isIdentifier: true})
  public description!: string;

  @Attribute({isIdentifier: true})
  public image!: string;

  @Attribute({isIdentifier: true})
  public price!: number;

  @Attribute({isIdentifier: true})
  public available!: boolean;

  @Attribute({isIdentifier: true})
  public menu_id!: boolean;
}
