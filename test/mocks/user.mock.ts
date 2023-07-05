import { UserRepository } from "../../src/domain/user.repository";
import { User } from "../../src/infraestructure/database/models/user.model";

const userMock: User = {
  name: "daniel",
  cashback: {
    total: 0,
  },
  leal_points: [],
  leal_points_history: [],
  cashback_history: [],
};

export class UserRepositoryMock implements UserRepository {
  createUser(name: string): Promise<User> {
    const user = userMock;
    user.name = name;
    return Promise.resolve(user);
  }

  findById(id: string): Promise<User | null> {
    if (id == "1234") {
      return Promise.resolve(userMock);
    }
    return Promise.resolve(null);
  }

  updateLealPoints(
    id_user: string,
    value: number,
    id_commerce: string,
    id_branch_office: string,
    id_campaign: string
  ): Promise<User | null> {
    const user = userMock;
    user.leal_points_history.push({
      id_commerce,
      id_branch_office,
      sign: true,
      value,
      id_campaign,
    });
    if (id_user == "1234") {
      return Promise.resolve(user);
    }
    return Promise.resolve(null);
  }

  updateCashback(id_user: string, value: number): Promise<User | null> {
    const user = userMock;
    user.cashback.total = value;
    if (id_user == "1234") {
      return Promise.resolve(user);
    }
    return Promise.resolve(null);
  }
}

export { userMock };
