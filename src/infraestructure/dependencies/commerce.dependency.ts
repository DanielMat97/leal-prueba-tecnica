import { CommerceDatabase } from "../database/commerce.database";
import { CommerceApplication } from "../../application/commerce.application";
import { CommerceController } from "../http/controllers/commerce.controller";

const commerceRepository = new CommerceDatabase();
const commerceApplication = new CommerceApplication(commerceRepository);
const commerceController = new CommerceController(commerceApplication);

export { commerceController, commerceApplication };
