import { BranchOfficeEntity } from "./branch_office.entity";

export interface CommerceEntity {
  name: string;
  branchOffice: BranchOfficeEntity[];
}
