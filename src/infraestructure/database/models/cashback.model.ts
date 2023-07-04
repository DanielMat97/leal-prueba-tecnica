import { prop, getModelForClass } from "@typegoose/typegoose";

export class CashBack {
  @prop({ required: true, min: 0 })
  total: number;
}

const schemaOptions = {
  schemaOptions: {
    timestamps: {
      updatedAt: true,
    },
  },
};

const CashBackModel = getModelForClass(CashBack, schemaOptions);
export { CashBackModel };
