import { prop, getModelForClass } from "@typegoose/typegoose";

import { LealPoints } from "./leal_points.model";
import { CashBack } from "./cashback.model";
import { LealPointsHistory } from "./leal_points_history.model";
import { CashBackHistory } from "./cashback_history.model";

export class User {
  @prop({ required: true, trim: true })
  name: string;

  @prop({ default: null, required: false, type: () => LealPoints })
  leal_points: LealPoints | null;

  @prop({ default: null, required: false, type: () => CashBack })
  cashback: CashBack | null;

  @prop({ default: null, required: false, type: () => [LealPointsHistory] })
  leal_points_history: LealPointsHistory[] | null;

  @prop({ default: null, required: false, type: () => [CashBackHistory] })
  cashback_history: CashBackHistory[] | null;
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
