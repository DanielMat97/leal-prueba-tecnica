import { CommerceRepository } from "../../src/domain/commerce.repository";
import { Commerce } from "src/infraestructure/database/models/commerce.model";

const commerceMock: Commerce = {
  name: "Google Inc",
  branchOffice: [
    {
      id_commerce: "64a50213ae68d2734d8fcd99",
      name: "google sucursal 1",
      campaing: {
        id_branch_office: "64a502c9b530ed7daff6ad95",
        rules: {
          id_campaing: "64a502deb530ed7daff6ad98",
          type: "LEAL_POINTS",
          start_date: new Date("2023-05-01T00:00:00.000Z"),
          end_date: new Date("2028-09-20T09:53:15.258Z"),
          detail: {
            type: "bonds",
            value: 50,
          },
        },
      },
    },
  ],
};

export class CommerceRepositoryMock implements CommerceRepository {
  create(name: string): Promise<Commerce> {
    commerceMock.name = name;
    return Promise.resolve(commerceMock);
  }
  findById(id: string): Promise<Commerce | null> {
    if (id == "1234") {
      return Promise.resolve(commerceMock);
    }
    return Promise.resolve(null);
  }
  find(): Promise<Array<Commerce>> {
    return Promise.resolve([commerceMock]);
  }
  createBranch(id_commerce: string, name: string): Promise<Commerce | null> {
    if (id_commerce == "1234" || name == "Google Inc Sucursal") {
      return Promise.resolve(commerceMock);
    }
    return Promise.resolve(null);
  }
  findBranchById(id: string): Promise<Commerce | null> {
    if (id == "1234") {
      return Promise.resolve(commerceMock);
    }
    return Promise.resolve(null);
  }
  assingCampaing(id: string, campaing: Object): Promise<Commerce | null> {
    if (id == "1234" || campaing) {
      return Promise.resolve(commerceMock);
    }
    return Promise.resolve(null);
  }
}

export { commerceMock };
