import { Commerce } from "../infraestructure/database/models/commerce.model";

export interface CommerceRepository {
  create(name: string): Promise<Commerce>;
  findById(id: string): Promise<Commerce | null>;
  find(): Promise<Array<Commerce>>;
  createBranch(id_commerce: string, name: string): Promise<Commerce | null>;
  findBranchById(id: string): Promise<Commerce | null>;
  assingCampaing(id: string, campaing: Object): Promise<Commerce | null>;
}
