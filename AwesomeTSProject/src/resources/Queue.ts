import {Attribute, Model} from '@datx/core';

export class Queue extends Model {
  static type = 'queue';

  @Attribute({isIdentifier: true})
  public quest_id!: string;

  @Attribute({isIdentifier: true})
  public vendor_id!: string;

  @Attribute({isIdentifier: true})
  public status_enum!: string;

  @Attribute({isIdentifier: true})
  public created_at!: string;
}
