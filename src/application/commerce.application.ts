import { CommerceRepository } from "src/domain/commerce.repository";

export class CommerceApplication {
  private commerceRepository;

  constructor(_commerceRepository: CommerceRepository) {
    this.commerceRepository = _commerceRepository;
  }

  async createCommerce(name: string) {
    return await this.commerceRepository.create(name);
  }

  async findCommerceById(id: string) {
    return await this.commerceRepository.findById(id);
  }

  async getAll() {
    return await this.commerceRepository.find();
  }

  async createBranch(id_commerce: string, name: string) {
    return await this.commerceRepository.createBranch(id_commerce, name);
  }

  async findBranchOfficeById(_id: string) {
    return await this.commerceRepository.findBranchById(_id);
  }

  async assingCampaing(
    _id: string,
    type: string,
    start_date: Date,
    end_date: Date,
    detail: Object
  ) {
    const campaing = {
      id_branch_office: _id,
      rules: {
        type,
        start_date,
        end_date,
        detail,
      },
    };

    return await this.commerceRepository.assingCampaing(_id, campaing);
  }
}
