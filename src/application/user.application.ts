import { UserRepository } from "src/domain/user.repository";

export class UserApplication {
  private userRepository;

  constructor(_userRepository: UserRepository) {
    this.userRepository = _userRepository;
  }

  async createUser(name: string) {
    return await this.userRepository.createUser(name);
  }

  async findUserById(id: string) {
    return await this.userRepository.findById(id);
  }

  async assingLealPoints(
    id_user: string,
    value: number,
    id_commerce: string,
    id_branch_office: string,
    id_campaign: string
  ) {
    return await this.userRepository.updateLealPoints(
      id_user,
      value,
      id_commerce,
      id_branch_office,
      id_campaign
    );
  }

  async assingCashback(
    id_user: string,
    value: number,
    id_commerce: string,
    id_branch_office: string,
    id_campaign: string
  ) {
    const user = await this.userRepository.findById(id_user);
    const total = user?.cashback.total ? user.cashback.total : 0;
    const cashback = total + value;

    return await this.userRepository.updateCashback(
      id_user,
      value,
      id_commerce,
      id_branch_office,
      id_campaign,
      cashback
    );
  }
}
