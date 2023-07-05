import { UserRepository } from "../../src/domain/user.repository";
import { UserApplication } from "../../src/application/user.application";
import { UserRepositoryMock, userMock } from "../mocks/user.mock";

describe("UserApplication", () => {
  let userRepository: UserRepository;
  let userApplication: UserApplication;

  beforeEach(() => {
    userRepository = new UserRepositoryMock();
    userApplication = new UserApplication(userRepository);
  });

  test("userApplication should be an instance of UserApplication", () => {
    expect(userApplication instanceof UserApplication).toBe(true);
  });

  test("userRepository should be an instance of MockUserRepository", () => {
    expect(userRepository instanceof UserRepositoryMock).toBe(true);
  });

  test("createUser should call userRepository.createUser with the provided name", async () => {
    const name = "John Doe";
    const user = await userApplication.createUser(name);
    expect(user.name).toBe(name);
  });

  test("findUserById should call userRepository.findUserById with the provided id", async () => {
    const id = "1234";
    const user = await userApplication.findUserById(id);
    expect(user).toBe(userMock);
  });

  test("assingLealPoints should call userRepository.assingLealPoints with the provided interface", async () => {
    const id = "1234";
    const value = 20000;
    const id_commerce = "1234";
    const id_branch_office = "1234";
    const id_campaign = "1234";
    const user = await userApplication.assingLealPoints(
      id,
      value,
      id_commerce,
      id_branch_office,
      id_campaign
    );
    expect(user).toBe(userMock);
  });

  test("assingCashback should call userRepository.assingCashback with the provided interface", async () => {
    const id = "1234";
    const value = 20000;
    const id_commerce = "1234";
    const id_branch_office = "1234";
    const id_campaign = "1234";
    const user = await userApplication.assingCashback(
      id,
      value,
      id_commerce,
      id_branch_office,
      id_campaign
    );
    expect(user).toBe(userMock);
  });

  test("assingCashback should call userRepository.assingCashback with the provided user null", async () => {
    const id = "12345";
    const value = 20000;
    const id_commerce = "1234";
    const id_branch_office = "1234";
    const id_campaign = "1234";
    const user = await userApplication.assingCashback(
      id,
      value,
      id_commerce,
      id_branch_office,
      id_campaign
    );
    expect(user).toBe(null);
  });
});
