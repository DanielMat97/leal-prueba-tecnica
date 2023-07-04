import { prop, getModelForClass, Ref } from "@typegoose/typegoose";

import { LealPoints } from "./leal_points.model";
import { CashBack } from "./cashback.model";
import { LealPointsHistory } from "./leal_points_history.model";
import { CashBackHistory } from "./cashback_history.model";

export class User {
  @prop({ required: true, trim: true })
  name: string;

  @prop({ default: null, required: false })
  leal_points: Ref<LealPoints | null>;

  @prop({ default: null, required: false })
  cashback: Ref<CashBack | null>;

  @prop({ default: null, required: false })
  leal_points_history: Ref<LealPointsHistory | null>[];

  @prop({ default: null, required: false })
  cashback_history: Ref<CashBackHistory | null>[];
}

const schemaOptions = {
  schemaOptions: {
    timestamps: {
      updatedAt: true,
      createdAt: true,
    },
  },
};

const UserModel = getModelForClass(User, schemaOptions);
export { UserModel };
