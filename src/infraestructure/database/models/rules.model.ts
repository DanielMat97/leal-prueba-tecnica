import { prop, getModelForClass } from "@typegoose/typegoose";

interface DetailInterface {
  type: string;
  value: number;
}

export class Rules {
  @prop({ required: true })
  id_campaing: string;

  @prop({ required: true })
  type: string;

  @prop({ required: true, type: Date })
  start_date: Date;

  @prop({ required: true, type: Date })
  end_date: Date;

  @prop({ required: true })
  detail: DetailInterface;
}

const schemaOptions = {
  schemaOptions: {
    timestamps: {
      updatedAt: true,
      createdAt: true,
    },
  },
};

const RulesModel = getModelForClass(Rules, schemaOptions);
export { RulesModel };
