import { CommerceRepository } from "../../src/domain/commerce.repository";
import { CommerceApplication } from "../../src/application/commerce.application";
import { CommerceRepositoryMock, commerceMock } from "../mocks/commerce.mock";

describe("CommerceApplication", () => {
  let commerceRepository: CommerceRepository;
  let commerceApplication: CommerceApplication;

  beforeEach(() => {
    commerceRepository = new CommerceRepositoryMock();
    commerceApplication = new CommerceApplication(commerceRepository);
  });

  test("commerceApplication should be an instance of commerceApplication", () => {
    expect(commerceApplication instanceof CommerceApplication).toBe(true);
  });

  test("commerceRepository should be an instance of MockcommerceRepository", () => {
    expect(commerceRepository instanceof CommerceRepositoryMock).toBe(true);
  });

  test("createCommerce should call commerceApplication.createCommerce with the provided name", async () => {
    const name = "Google Inc";
    const commerce = await commerceApplication.createCommerce(name);
    expect(commerce.name).toBe(name);
  });

  test("createBranch should call commerceApplication.createBranch with the provided id and name", async () => {
    const id = "1234";
    const name = "Google Inc Sucursal";
    const commerce = await commerceApplication.createBranch(id, name);
    expect(commerce).toBe(commerceMock);
  });

  test("findCommerceById should call commerceApplication.findCommerceById with the provided id", async () => {
    const id = "1234";
    const commerce = await commerceApplication.findCommerceById(id);
    expect(commerce).toBe(commerceMock);
  });

  test("findBranchOfficeById should call commerceApplication.findBranchOfficeById with the provided id", async () => {
    const id = "1234";
    const commerce = await commerceApplication.findBranchOfficeById(id);
    expect(commerce).toBe(commerceMock);
  });

  test("getAll should call commerceApplication.getAll", async () => {
    const commerce = await commerceApplication.getAll();
    expect(commerce).toEqual([commerceMock]);
  });

  test("findBranchOfficeById should call commerceApplication.findBranchOfficeById with the provided id", async () => {
    const id = "1234";
    const commerce = await commerceApplication.assingCampaing(
      id,
      "LEAL_POINTS",
      new Date("2023-05-01T00:00:00.000Z"),
      new Date("2023-05-01T00:00:00.000Z"),
      {}
    );
    expect(commerce).toBe(commerceMock);
  });
});
