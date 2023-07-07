import { CampaingEntity } from "./campaing.entity";

export interface BranchOfficeEntity {
  id_commerce: string;
  name: string;
  campaing: CampaingEntity;
}
