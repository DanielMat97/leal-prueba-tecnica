import { prop, getModelForClass } from "@typegoose/typegoose";

import { LealPoints } from "./leal_points.model";
import { CashBack } from "./cashback.model";
import { LealPointsHistory } from "./leal_points_history.model";
import { CashBackHistory } from "./cashback_history.model";
import { UserEntity } from "src/domain/entities/user.entity";

export class User implements UserEntity {
  @prop({ required: true, trim: true })
  name: string;

  @prop({ required: false, type: () => LealPoints })
  leal_points: LealPoints[];

  @prop({ required: false, type: () => CashBack, default: { total: 0 } })
  cashback: CashBack;

  @prop({ required: false, type: () => LealPointsHistory })
  leal_points_history: LealPointsHistory[];

  @prop({ required: false, type: () => CashBackHistory })
  cashback_history: CashBack[];
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
