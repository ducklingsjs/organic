import {Attribute, Model} from '@datx/core';
import {MenuItem} from './MenuItem';

export class VendorDetails extends Model {
  static type = 'vendor_details';

  @Attribute({isIdentifier: true})
  public id!: string;

  @Attribute({isIdentifier: true})
  public event_id!: string;

  @Attribute({isIdentifier: true})
  public location!: string;

  @Attribute({isIdentifier: true})
  public name!: string;

  @Attribute({isIdentifier: true})
  public menu!: {
    menuItems: Array<MenuItem>;
  };
}
