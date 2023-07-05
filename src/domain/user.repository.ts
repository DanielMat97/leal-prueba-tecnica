import { User } from "src/infraestructure/database/models/user.model";

export interface UserRepository {
  createUser(name: string): Promise<User>;
  findById(id: string): Promise<User | null>;
  updateLealPoints(
    id_user: string,
    value: number,
    id_commerce: string,
    id_branch_office: string,
    id_campaign: string
  ): Promise<User | null>;
  updateCashback(
    id_user: string,
    value: number,
    id_commerce: string,
    id_branch_office: string,
    id_campaign: string,
    cashback: number
  ): Promise<User | null>;
}
