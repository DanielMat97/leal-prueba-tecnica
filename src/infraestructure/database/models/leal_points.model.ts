import { prop, getModelForClass } from "@typegoose/typegoose";
import { LealPointsEntity } from "src/domain/entities/leal_points.entity";

export class LealPoints implements LealPointsEntity {
  @prop({ required: true })
  id_commerce: string;

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

const LealPointsModel = getModelForClass(LealPoints, schemaOptions);
export { LealPointsModel };
