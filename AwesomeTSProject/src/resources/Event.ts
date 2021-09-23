import {Attribute, Model} from '@datx/core';

export class Event extends Model {
  static type = 'event';

  @Attribute({isIdentifier: true})
  public id!: string;

  @Attribute({isIdentifier: true})
  public image!: string;

  @Attribute({isIdentifier: true})
  public name!: string;

  @Attribute({isIdentifier: true})
  public location!: string;

  @Attribute({isIdentifier: true})
  public description!: string;

  @Attribute({isIdentifier: true})
  public entry_fee!: string;

  @Attribute({isIdentifier: true})
  public start_time!: string;

  @Attribute({isIdentifier: true})
  public end_time!: string;

  @Attribute({isIdentifier: true})
  public organizator_id!: string;
}
