import { CashbackEntity } from "./cashback.entity";
import { LealPointsEntity } from "./leal_points.entity";
import { LealPointsHistoryEntity } from "./leal_points_history.entity";

export interface UserEntity {
  name: string;
  leal_points: LealPointsEntity[];
  cashback: CashbackEntity;
  leal_points_history: LealPointsHistoryEntity[];
  cashback_history: CashbackEntity[];
}
