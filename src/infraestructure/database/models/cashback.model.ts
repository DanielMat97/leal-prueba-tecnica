import { prop, getModelForClass } from "@typegoose/typegoose";
import { CashbackEntity } from "src/domain/entities/cashback.entity";

export class CashBack implements CashbackEntity {
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
